<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $table = "replies";
    use HasFactory;
    protected $fillable = [
        'user_id',
        'comment_id',
        'reply',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
