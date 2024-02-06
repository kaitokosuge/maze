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
    public function index(Category $category)
    {
        $today = Carbon::now();
        $days = [];
        for($i = 0;$i<9;$i++){
            $days[] = $today->copy()->addDays($i)->toDateString();
        }
        return Inertia::render('Admin/AdminContainer')->with(['categories' => $category->get(),'days' => $days]); 
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
        $quiz->save();
        $quiz->categories()->attach($request->category);
        foreach($request->choices as $reqChoice){
            $choice = new Choice();
            $choice->choice = $reqChoice["choice"];
            $choice->isTrue = boolval($reqChoice["istrue"]);
            $choice->quiz_id = $quiz->id;
            $choice->save();
        }
    }
} 
