<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Quiz;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodayController extends Controller
{
    public function index(Quiz $quiz,Category $category)
    {
        $user = \Auth::user();
        $user->load('likes');
        $today = new Carbon();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);

        $todayQuizNum = $quiz->where('isToday',true)->where('showDay', '<=' ,$today)->count();
        $todayQuizFalse = $user->falseQuiz->count();
        $todayQuizTrue = $user->isUserTrue->where('isToday',true)->count();

        $todayQuizRate = floor(($todayQuizTrue - $todayQuizFalse ) / $todayQuizNum *100);


        $quizzes = $quiz->with("categories")->with("choices")->with("user")->with('likes')->with('isUserTrue')->with(['comments' => function ($query) {
            $query->with('user');
            $query->with(['replies' => function ($quer) {
                $quer->with('user');
            }]);
        }])->orderBy('id','desc')->where('isToday',true)->where('showDay', '<=' ,$today)->paginate(20);
        return Inertia::render('Today/TodayContainer')->with(['todayQuizRate'=>$todayQuizRate,'quizzes'=>$quizzes,'allRate'=>$allRate, 'user' => $user, 'categories' => $category->with('quizzes')->get()]);
    }
    public function getTodayQuiz(Quiz $quiz,$pageNum)
    {
        $today = new Carbon();
        $AllQuiz = $quiz->with("categories")->with("choices")->with("user")->with('likes')->with('isUserTrue')->with(['comments' => function ($query) {
            $query->with('user');
            $query->with(['replies' => function ($quer) {
                $quer->with('user');
            }]);
        }])->orderBy('id','desc')->where('isToday',true)->where('showDay', '<=' ,$today)->paginate(20, ['*'], 'page',$pageNum);

        return response()->json([
            'allQuiz' => $AllQuiz
        ]);
    }
}
