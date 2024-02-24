<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Quiz;
use Illuminate\Http\Request;

class LikeController extends Controller
{ 
    public function like(Like $like, Quiz $quiz)
    {
        $isLiked = $quiz->is_liked_by_auth_user();
        if($isLiked){
            $deleteLike = $like->where('user_id',\Auth::id())->where('quiz_id',$quiz->id);
            $deleteLike->delete();
            return response()->json([
                'status'=>'delete'
            ]);
        }else{
            $like->user_id = \Auth::user()->id;
            $like->quiz_id = $quiz->id;
            $like->save();
            return response()->json([
                'status'=>'post'
            ]);
        }
        
    }
}
