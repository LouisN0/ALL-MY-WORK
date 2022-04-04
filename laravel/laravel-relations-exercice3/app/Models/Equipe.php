<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    use HasFactory;
     
    protected $fillable = [
        'nom',
        'ville',
        'pays',
        'attaquants',
        'nb_attaquants',
        'centraux',
        'nb_centraux',
        'defenseurs',
        'nb_defenseurs',
        'remplaçants',
        'nb_remplaçants',
        'max',
        'nb_max',
    ]; // model_anchor
     
    protected $table = 'equipes';
    public function joueurs()
    {
        return $this->hasMany(Joueur::class);
    }
}
