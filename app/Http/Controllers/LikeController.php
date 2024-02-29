<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Quiz;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LikeController extends Controller
{ 
    public function like(Quiz $quiz,Like $like,$pageNum)
    {
        $isLiked = $quiz->is_liked_by_auth_user();
        if($isLiked){
            $deleteLike = $like->where('user_id',\Auth::id())->where('quiz_id',$quiz->id);
            $deleteQuizId = $quiz->id;
            $deleteLike->delete();
            $today = new Carbon();
            $AllQuiz = $quiz->with("categories")->with("choices")->with("user")->with('likes')->with('isUserTrue')->with(['comments' => function ($query) {
                $query->with('user');
                $query->with(['replies' => function ($quer) {
                    $quer->with('user');
                }]);
            }])->orderBy('id','desc')->where('isToday',true)->where('showDay', '<=' ,$today)->paginate(20, ['*'], 'page',$pageNum);
            
            return response()->json([
                'quizId' => $deleteQuizId,
                'status'=>'delete',
                'AllQuiz'=>$AllQuiz
            ]);
        }else{
            $like->user_id = \Auth::user()->id;
            $like->quiz_id = $quiz->id;
            $like->save();
            $today = new Carbon();
            $AllQuiz = $quiz->with("categories")->with("choices")->with("user")->with('likes')->with('isUserTrue')->with(['comments' => function ($query) {
                $query->with('user');
                $query->with(['replies' => function ($quer) {
                    $quer->with('user');
                }]);
            }])->orderBy('id','desc')->where('isToday',true)->where('showDay', '<=' ,$today)->paginate(20, ['*'], 'page',$pageNum);
            return response()->json([
                'quizId' => $quiz->id,
                'status'=>'post',
                'AllQuiz'=>$AllQuiz
            ]);
        }
        
    }
}
