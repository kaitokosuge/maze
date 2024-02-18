<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Quiz;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request,Comment $comment,Quiz $quiz)
    {
        $comment->comment = $request->comment;
        $comment->user_id = \Auth::user()->id;
        $comment->quiz_id = $quiz->id;
        $comment->save();
        $comments = $comment->where('quiz_id',$quiz->id)->with('user')->orderBy('id','desc')->get();
        return response()->json([
            'comments'=>$comments
        ]);
    }
    public function delete()
    {
        dd("delete");
    }
}
