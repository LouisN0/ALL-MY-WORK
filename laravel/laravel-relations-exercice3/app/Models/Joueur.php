<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joueur extends Model
{
    use HasFactory;
     
    protected $fillable = [
        'nom',
        'prenom',
        'age',
        'telephone',
        'mail',
        'genre',
        'pays',
        'role',
    ]; // model_anchor
     
    protected $table = 'joueurs';
    public function equipe()
    {
        return $this->belongsTo(Equipe::class);
    }
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function photo(){
        return $this->hasOne(Photo::class);
    }
}
