@extends('back.layouts.app')
@section('content')
    <div class='container'>
        <h1 class='my-5'>Equipe {{ $equipe->nom }}</h1>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>nom</th>
                    <th scope='col'>ville</th>
                    <th scope='col'>pays</th>
                    <th scope='col'>attaquants</th>
                    <th scope='col'>centraux</th>
                    <th scope='col'>defenseurs</th>
                    <th scope='col'>remplaçants</th>
                    <th scope='col'>max</th>
                    <th scope='col'>Action</th>
                </tr> {{-- read_tr_anchor --}}
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>{{ $equipe->id }}</th>
                    <td>{{ $equipe->nom }}</td>
                    <td>{{ $equipe->ville }}</td>
                    <td>{{ $equipe->pays }}</td>
                    <td>{{ $equipe->nb_attaquants }}/{{ $equipe->attaquants }}</td>
                    <td>{{ $equipe->nb_centraux }}/{{ $equipe->centraux }}</td>
                    <td>{{ $equipe->nb_defenseurs }}/{{ $equipe->defenseurs }}</td>
                    <td>{{ $equipe->nb_remplaçants }}/{{ $equipe->remplaçants }}</td>
                    <td>{{ $equipe->nb_max }}/{{ $equipe->max }}</td>
                    <td> {{-- read_td_anchor --}}
                        <a class='btn btn-danger' href='{{ route('equipe.index') }}' role='button'>Back</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <h1>Joueurs de l'equipe {{ $equipe->nom }}</h1>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>nom</th>
                    <th scope='col'>prenom</th>
                    <th scope='col'>role</th>
                    <th scope='col'>Action</th>
                </tr> {{-- read_tr_anchor --}}
            </thead>
            <tbody>
                @foreach($joueurs as $joueur)
                <tr>
                    <th scope='row'>{{ $joueur->id }}</th>
                    <td>{{ $joueur->nom }}</td>
                    <td>{{ $joueur->prenom }}</td>
                    <td>{{ $joueur->role->role }}</td>
                    <td> {{-- read_td_anchor --}}
                        <a class='btn btn-danger' href='{{ route('joueur.index') }}' role='button'>Back</a>
                        <a class='btn btn-primary' href='{{ route('joueur.read', $joueur->id) }}' role='button'>Read</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        
    </div>
@endsection
