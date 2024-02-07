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
        $today = Carbon::now();
        $days = [];
        for($i = 0;$i<9;$i++){
            $days[] = $today->copy()->addDays($i)->toDateString();
        }
        $todayQuiz = $quiz->with("categories")->with("choices")->with("user")->orderBy('id','desc')->with('isUserTrue')->get()->filter(function ($item) {
            return $item->isToday === 1;
        })->first();
        $user=\Auth::user();
        if($user->isAdmin === 1){
            return Inertia::render('Admin/AdminContainer')->with(['categories' => $category->get(),'days' => $days]); 
        }else{
            return Inertia::render('Top/TopContainer')->with(['user' => $user, 'categories' => $category->with('quizzes')->get(),'todayQuiz' => $todayQuiz, 'quizzes' => $quiz->with("categories")->with("choices")->with("user")->get()]);
        };
    } 
    public function toBoolean(string $str) {
        return ($str === 'true');
    }
    public function storeQuiz(Request $request,Quiz $quiz)
    {
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
