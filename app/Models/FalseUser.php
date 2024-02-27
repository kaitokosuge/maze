<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FalseUser extends Model
{
    use HasFactory;
    protected $table="falseusers";
    protected $fillable =[
        'user_id',
        'quiz_id'
    ];
}
