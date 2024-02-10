<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Category;
use App\Models\Quiz;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function edit(Request $request,Category $category,Quiz $quiz,User $user): Response
    {
        $today = new Carbon();
        $user = \Auth::user();
        $allQuizNum = $quiz->where(function ($query) use ($today) {
            $query->where('showDay', '<=', $today);
                })->get()->count();
        $trueQuizNum = $user->isUserTrue()->count();
        $Rate = round($trueQuizNum / $allQuizNum, 2)*100;
        $allRate = floor($Rate);
        $allCategoryNum = $category->get()->count();
        $categoryArray = [];
        for($num = 0; $num < $allCategoryNum; $num++){
            $data = $category->find($num + 1)->quizzes()->where('showDay', '<=', $today)->count();
            array_push($categoryArray,$data);
        }
        

        // ユーザーに関連するクイズを取得
        $quizzes = $user->isUserTrue()->get();

        // カテゴリーごとの正解数を格納する配列を初期化
        $categoryStats = [];

        // クイズごとにループして正解数を計算
        foreach ($quizzes as $quiz) {
            foreach ($quiz->categories as $category) {
                // カテゴリーがまだ配列に存在しない場合は初期値を設定
                if (!isset($categoryStats[$category->id])) {
                    $categoryStats[$category->id] = 0;
                }
                // クイズが正解者のものであれば正解数を増やす
                if ($quiz->isUserTrue()) {
                    $categoryStats[$category->id]++;
                }
            }
        }
        

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'categories' => $category->get(),
            'trueQuizNum' => $trueQuizNum,
            'allQuizNum' => $allQuizNum,
            'allRate' => $allRate,
            'categoryQuizCount' =>  $categoryArray,
            'categoryQuizTrueCount'=>$categoryStats
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
