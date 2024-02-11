<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::middleware('auth')->group(function () {
    Route::get('/top', [QuizController::class, 'index']);
    Route::get('/quiz/{category}', [QuizController::class, 'showCategory']);
    Route::post('/quiz/answer/{quiz}',[QuizController::class,'quizTry']);
    
    Route::get('/get/quiz',[QuizController::class,'allQuizGet']);
    Route::get('/quiz/new/{category}',[QuizController::class,'quizGet']);

    Route::get('/mazer',[AdminController::class,'index']);
    Route::post("/mazer/store/quiz",[AdminController::class,'storeQuiz']);
    Route::post("/mazer/store/normal/quiz",[AdminController::class,'storeNormalQuiz']);
    Route::delete("/mazer/delete/quiz/{quiz}",[AdminController::class,'deleteQuiz']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
