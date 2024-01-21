<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Quiz;
use App\Models\Category;


class QuizController extends Controller
{
    public function index(User $user, Quiz $quiz, Category $category)
    {
        $todayQuiz = $quiz->with("categories")->with("choices")->with("user")->orderBy('id','desc')->get()->filter(function ($item) {
            return $item->isToday === 1;
        })->first();
        $user = \Auth::user();
        return Inertia::render('Container/TopContainer')->with(['user' => $user, 'categories' => $category->with('quizzes')->get(),'todayQuiz' => $todayQuiz, 'quizzes' => $quiz->with("categories")->with("choices")->with("user")->get()]);
    }

    public function showCategory(Category $category, Quiz $quiz)
    {
        $user= \Auth::user();
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->get();
        return Inertia::render('Category/CategoryContainer')->with(['user'=>$user,'category' => $category, 'quizzes' => $categoryQuiz, 'categories' => $category->get()]);
    }
    
    public function quizTry(Request $requests, Quiz $quiz , User $user)
    {
        $tryArray = $requests->toArray();
        $answerArray = array();
        foreach ($quiz->choices->where('isTrue',true) as $choice){
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
    public function quizGet(Category $category ,Quiz $quiz) 
    {
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->get();
        return response()->json([
            'newQuizzes' => $categoryQuiz
        ]);
    }
}
