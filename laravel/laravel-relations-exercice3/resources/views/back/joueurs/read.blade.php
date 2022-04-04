@extends('back.layouts.app')
@section('content')
    <div class='container'>
        <h1 class='my-5'>Joueurs</h1>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    
                    <th scope='col'>photo</th>
                    <th scope='col'>nom</th>
                    <th scope='col'>prenom</th>
                    <th scope='col'>age</th>
                    <th scope='col'>telephone</th>
                    <th scope='col'>mail</th>
                    <th scope='col'>genre</th>
                    <th scope='col'>pays</th>
                    <th scope='col'>role</th>
                    <th scope='col'>Action</th>
                </tr> {{-- read_tr_anchor --}}
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>{{ $joueur->id }}</th>
                    
                    <td><img class=" rounded mx-auto d-block img-fluid" src="/img/{{ $joueur->photo->img }}.jpg" alt=""></td>
                        
                    <td>{{ $joueur->nom }}</td>
                    <td>{{ $joueur->prenom }}</td>
                    <td>{{ $joueur->age }}</td>
                    <td>{{ $joueur->telephone }}</td>
                    <td>{{ $joueur->mail }}</td>
                    <td>{{ $joueur->genre }}</td>
                    <td>{{ $joueur->pays }}</td>
                    <td>{{ $joueur->role->role }}</td>
                    <td> {{-- read_td_anchor --}}
                        <a class='btn btn-danger' href='{{ route('joueur.index') }}' role='button'>Back</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
