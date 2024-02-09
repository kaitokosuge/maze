<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Quiz;
use App\Models\Category;
use Carbon\Carbon;

class QuizController extends Controller
{
    public function index(User $user, Quiz $quiz, Category $category)
    {
        
        $todayQuiz = $quiz->with("categories")->with("choices")->with("user")->orderBy('id','desc')->with('isUserTrue')->get()->filter(function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay === $today && $item->isToday === 1;
        })->first();
        $user = \Auth::user();
        $quizzes = $quiz->with("categories")->with("choices")->with("user")->with('isUserTrue')->orderBy('id','desc')->get()->filter( function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay <= $today;
        })->values()->toArray();
        return Inertia::render('Top/TopContainer')->with(['user' => $user, 'categories' => $category->with('quizzes')->get(),'todayQuiz' => $todayQuiz, 'quizzes' => $quizzes]);
    }

    public function showCategory(Category $category, Quiz $quiz)
    {
        $user= \Auth::user();
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->orderBy('id','desc')->get()->filter( function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay <= $today;
        })->values()->toArray();
        return Inertia::render('Category/CategoryContainer')->with(['user'=>$user,'category' => $category, 'quizzes' => $categoryQuiz, 'categories' => $category->get()]);
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
            $quiz->isUserTrue()->attach($user->id);
            return response()->json([
                'isTrue' => 'true',
            ]);
        }else{
            return ['isTrue' => 'false'];
        }
    }

    public function allQuizGet(Quiz $quiz) 
    {
        $AllQuiz = $quiz->with("choices")->with('user')->with('isUserTrue')->with('categories')->orderBy('id','desc')->get()->filter( function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay <= $today;
        })->values()->toArray();
        return response()->json([
            'allQuiz' => $AllQuiz
        ]);
    }
    public function quizGet(Category $category ,Quiz $quiz) 
    {
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->orderBy('id','desc')->get()->filter( function ($item) {
            $day = new Carbon();
            $today = $day->toDateString();
            return $item->showDay <= $today;
        })->values()->toArray();
        return response()->json([
            'newQuizzes' => $categoryQuiz
        ]);
    }
}
