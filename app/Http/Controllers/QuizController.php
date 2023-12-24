<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Quiz;

class QuizController extends Controller
{
    public function index(User $user, Quiz $quiz)
    {
        $user = \Auth::user();
        return Inertia::render('Container/TopContainer')->with(['user' => $user, 'quiz' => $quiz->with("trues")->with("categories")->with("choices")->with("user")->get()]);
    }
}
