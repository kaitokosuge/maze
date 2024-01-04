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
        $user = \Auth::user();
        return Inertia::render('Container/TopContainer')->with(['user' => $user, 'categories' => $category->with('quizzes')->get(), 'quizzes' => $quiz->with("categories")->with("choices")->with("user")->get()]);
    }

    public function showCategory(Category $category, Quiz $quiz)
    {
        $categoryQuiz = $quiz->whereHas('categories', function ($query) use ($category) {
            $query->where('id', $category->id);
        })->with("choices")->with('user')->with('isUserTrue')->get();
        //dd($categoryQuiz);
        return Inertia::render('Category/CategoryContainer')->with(['category' => $category, 'quizzes' => $categoryQuiz, 'categories' => $category->get()]);
    }
}
