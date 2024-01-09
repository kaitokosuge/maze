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
    public function isUserTrue()
    {
        return $this->belongsToMany(User::class, 'user_quiz', 'quiz_id', 'user_id');
    }

    public function choices()
    {
        return $this->hasMany(Choice::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_quiz', 'quiz_id', 'category_id');
    }
}
