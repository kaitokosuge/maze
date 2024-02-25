<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Quiz;
use App\Models\Category;
use App\Models\Comment;
use Carbon\Carbon;

class QuizController extends Controller
{
    public function index(User $user, Quiz $quiz, Category $category,Comment $comment)
    {
        $todayQuiz = $quiz->with("categories")->with("choices")->with("user")->orderBy('id','desc')->with('isUserTrue')->get()->filter(function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay === $today && $item->isToday === 1;
        })->first();
        $user = \Auth::user();
        $day = new Carbon();
        $today = $day->toDateString();
        $quizzes = $quiz->with("categories")->with("choices")->with("user")->with('isUserTrue')->orderBy('id','desc')->where('showday', '<=' ,$today)->paginate(20);
        //dd($quizzes);
        $today = new Carbon();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);
        // $testQuiz = $quiz->paginate();
        // dd($testQuiz);
        if ($todayQuiz != null) {
            $comments = $comment->where('quiz_id', $todayQuiz->id)->with("user")->orderBy('id','desc')->get();
            $likesCount = $todayQuiz->likes->count();
            $likeCheck = !$user->likes->where('quiz_id',$todayQuiz->id)->isEmpty();
        } else {
            $comments = "no comments";
            $likesCount = "no likes";
            $likeCheck = "no count";
        }
        return Inertia::render('Top/TopContainer')->with(['likeCheck'=>$likeCheck,'likescount'=>$likesCount,'comments'=>$comments,'allRate'=>$allRate,'user' => $user, 'categories' => $category->with('quizzes')->get(),'todayQuiz' => $todayQuiz, 'quizzes' => $quizzes]);
    }

    public function showCategory(Category $category, Quiz $quiz)
    {
        $user= \Auth::user();
        // $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
        //     $query->where('id', $category->id);
        // })->with("choices")->with('user')->with('isUserTrue')->orderBy('id','desc')->paginate(8)->filter( function ($item) {
        //     $day = new Carbon();
        //     $today = $day->toDateString();
        //     return $item->showDay <= $today;
        // })->values()->toArray();
        $day = new Carbon();
        $today = $day->toDateString();
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->orderBy('id','desc')->where('showday', '<=' ,$today)->paginate(20);
        $today = new Carbon();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);
        return Inertia::render('Category/CategoryContainer')->with(['allRate'=>$allRate,'user'=>$user,'category' => $category, 'quizzes' => $categoryQuiz, 'categories' => $category->get()]);
    }
    
    public function quizTry(Request $requests, Quiz $quiz , User $user)
    {
        $tryArray = $requests->toArray();
        $answerArray = array();
        foreach ($quiz->choices->where('isTrue',true) as $choice) {
            array_push($answerArray,$choice->id);
        }
        if(count($answerArray) === count($tryArray) && array_diff($answerArray, $tryArray) === array_diff($tryArray, $answerArray)){
            $user = \Auth::user();
            if ($quiz->isUserTrue()->where('user_id', $user->id)->where('quiz_id', $quiz->id)->exists()) {
                return response()->json([
                    'isTrue' => 'true',
                    'alredyTrue'=>"alredyTrue"
                ]);
            } else {
                $user = \Auth::user();
                $quiz->isUserTrue()->attach($user->id);
                return response()->json([
                    'isTrue' => 'true',
                ]);
            }
        }else{
            return ['isTrue' => 'false'];
        }
    }

    public function allQuizGet(Quiz $quiz) 
    {
        $day = new Carbon();
        $today = $day->toDateString();
        $AllQuiz = $quiz->with("categories")->with("choices")->with("user")->with('isUserTrue')->orderBy('id','desc')->where('showday', '<=' ,$today)->paginate(20);
        return response()->json([
            'allQuiz' => $AllQuiz
        ]);
    }

    public function quizGet(Category $category ,Quiz $quiz , $pageNum) 
    {
        $day = new Carbon();
        $today = $day->toDateString();
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->orderBy('id','desc')->where('showday', '<=' ,$today)->paginate(20, ['*'], 'page',$pageNum);
        return response()->json([
            'newQuizzes' => $categoryQuiz
        ]);
    }
}
