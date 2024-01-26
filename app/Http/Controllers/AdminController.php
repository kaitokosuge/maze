<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
        //dd($days);
        return Inertia::render('Admin/AdminContainer')->with(['categories' => $category->get(),'days' => $days]); 
    } 
} 
