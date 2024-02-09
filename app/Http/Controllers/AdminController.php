<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Quiz;
use App\Models\Choice;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;


class AdminController extends Controller
{
    public function index(Category $category,Quiz $quiz)
    {
        $today = new Carbon();
        $nineDays = $today->copy()->addDays(8);
        //dd($nineDays);
        $sliceToday = $today->toDateString();
        $rangeQuizzes = $quiz->where(function ($query) use ($sliceToday, $nineDays) {
            $query->where('showDay', '>=', $sliceToday)
                  ->where('showDay', '<=', $nineDays);
                })->where('isToday',true)->with("categories")->with("user")->get();
        $mapDay = $rangeQuizzes->map(function($quiz){
            return $quiz->showDay;
        })->toArray();
        $today = Carbon::now();
        $days = [];
        for($i = 0;$i<9;$i++){
            $days[] = $today->copy()->addDays($i)->toDateString();
        }
        $showDays = array_values(array_diff($days, $mapDay));
        $user=\Auth::user();
        if($user->isAdmin === 1){
            return Inertia::render('Admin/AdminContainer')->with(['categories' => $category->get(),'days' => $days,"showDays" => $showDays,"reserveQuizzes"=>$rangeQuizzes]); 
        }else{
            return redirect("/top");
        };
    }
    public function storeQuiz(Request $request,Quiz $quiz)
    {
        $allQuiz = $quiz->get();
        $filterQuizzez = $allQuiz->filter(function($quiz) use($request){
            return $quiz->showDay === $request->day;
        });
        if($filterQuizzez->isNotEmpty()){
            $error = "クイズが予約済みの日にちです";
            return response()->json([
                'successReserve' =>null,
                'alreadyReserve' =>$error
            ]);
        }else{
            
            $quiz->quiz = $request->quiz;
            $quiz->answer = $request->answer;
            $quiz->user_id = \Auth::user()->id;
            $quiz->isToday = true;
            $quiz->showDay = $request->day;
            $quiz->save();
            $quiz->categories()->attach($request->category);
            foreach($request->choices as $reqChoice){
                $choice = new Choice();
                $choice->choice = $reqChoice["choice"];
                $choice->isTrue = filter_var($reqChoice["istrue"], FILTER_VALIDATE_BOOLEAN);
                $choice->quiz_id = $quiz->id;
                $choice->save();
            }
            $success = "送信完了しました。ありがとうございます";
            return response()->json([
                'successReserve' =>$success,
                'alreadyReserve' =>null
            ]);
        }
        
    }
    public function storeNormalQuiz(Request $request,Quiz $quiz)
    {
        $quiz->quiz = $request->quiz;
        $quiz->answer = $request->answer;
        $quiz->user_id = \Auth::user()->id;
        $quiz->isToday = false;
        $day = new Carbon();
        $today = $day->toDateString();
        $quiz->showDay = $today;
        $quiz->save();
        $quiz->categories()->attach($request->category);
        foreach($request->choices as $reqChoice){
            $choice = new Choice();
            $choice->choice = $reqChoice["choice"];
            $choice->isTrue = filter_var($reqChoice["istrue"], FILTER_VALIDATE_BOOLEAN);
            $choice->quiz_id = $quiz->id;
            $choice->save();
        }
    }
} 
