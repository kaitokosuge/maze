<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Quiz;
use App\Models\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(Request $request, Reply $reply,Comment $comment,Quiz $quiz)
    {
        $reply->reply = $request->reply;
        $reply->user_id = \Auth::user()->id;
        $reply->comment_id = $comment->id;
        $reply->save();
        $comments = $comment->where('quiz_id',$quiz->id)->with('user')->with(['replies' => function ($query) {
            $query->with('user');
        }])->orderBy('id','desc')->get();
        return response()->json([
            'comments'=>$comments,
            // 'user' =>\Auth::user()
        ]);
    }
}
