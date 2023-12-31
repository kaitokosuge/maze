<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'category_quiz', 'category_id', 'quiz_id');
    }
}
