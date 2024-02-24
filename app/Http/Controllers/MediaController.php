<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Quiz;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function history(Quiz $quiz,Category $category)
    {
        $user=\Auth::user();
        if($user===null){
            return Inertia::render('History/HistoryContainer')->with(['categories' => $category->get()]);
        }
        $today = new Carbon();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);
        return Inertia::render('History/HistoryContainer')->with(['allRate'=>$allRate,'user'=>$user,'categories' => $category->get()]);
    }
    public function news(Quiz $quiz,Category $category)
    {
        $envnews = config('micronews.micronews');
        $user=\Auth::user();
        if($user===null){
            return Inertia::render('News/NewsContainer')->with(['categories' => $category->get()]);
        }
        $today = new Carbon();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);
        return Inertia::render('News/NewsContainer')->with(['envnews'=>$envnews,'allRate'=>$allRate,'user'=>$user,'categories' => $category->get()]);
    }
} 
