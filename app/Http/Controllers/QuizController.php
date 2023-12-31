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
        return Inertia::render('Container/TopContainer')->with(['user' => $user, 'categories' => $category->get(), 'quiz' => $quiz->with("categories")->with("choices")->with("user")->get()]);
    }
}
