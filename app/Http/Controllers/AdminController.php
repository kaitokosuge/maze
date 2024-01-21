<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Category $category)
    {
        return Inertia::render('Admin/AdminContainer')->with(['categories' => $category->get()]); 
    } 
} 
