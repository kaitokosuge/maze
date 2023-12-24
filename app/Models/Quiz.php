<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function trues()
    {
        return $this->belongsToMany(TrueNum::class, 'true_quiz', 'quiz_id', 'true_id');
    }
    public function choices()
    {
        return $this->belongsToMany(Choice::class, 'choice_quiz', 'quiz_id', 'choice_id');
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_quiz', 'quiz_id', 'category_id');
    }
}
