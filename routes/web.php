<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


Route::get('/',[MediaController::class,'history']);
Route::get('/news',[MediaController::class,'news']);
Route::middleware('verified')->group(function () {

    Route::get('/top', [QuizController::class, 'index']);
    Route::get('/quiz/{category}', [QuizController::class, 'showCategory']);
    Route::post('/quiz/answer/{quiz}',[QuizController::class,'quizTry']);
    
    Route::get('/get/quiz',[QuizController::class,'allQuizGet']);
    Route::get('/quiz/new/{category}/{page}',[QuizController::class,'quizGet']);

    Route::post('/comment/{quiz}',[CommentController::class,'store']);
    Route::delete('/comment/{comment}',[CommentController::class,'delete']);

    Route::post('/like/{quiz}',[LikeController::class,'like']);

    Route::get('/mazer',[AdminController::class,'index']);
    Route::post("/mazer/store/quiz",[AdminController::class,'storeQuiz']);
    Route::post("/mazer/store/normal/quiz",[AdminController::class,'storeNormalQuiz']);
    Route::delete("/mazer/delete/quiz/{quiz}",[AdminController::class,'deleteQuiz']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
