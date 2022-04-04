@extends('back.layouts.app')
@section('content')
    <div class='container'>
        <h1>Joueurs</h1>
        @if ($errors->any())
            <div class='alert alert-danger'>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        @if (session()->has('warning'))
            <div class='alert alert-danger'>
                {{ session()->get('warning') }}
            </div>
        @endif
        <form action='{{ route('joueur.store') }}' method='post' enctype='multipart/form-data'>
            @csrf
            <div class="mb-3">
                <label for="formFile" class="form-label">Image</label>
                <input class="form-control" name='img' type="file" id="formFile">
           </div>
            <div>
                <label for=>nom</label>
                <input type='text' name='nom'>
            </div>
            <div>
                <label for=>prenom</label>
                <input type='text' name='prenom'>
            </div>
            <div>
                <label for=>age</label>
                <input type='text' name='age'>
            </div>
            <div>
                <label for=>telephone</label>
                <input type='text' name='telephone'>
            </div>
            <div>
                <label for=>mail</label>
                <input type='text' name='mail'>
            </div>
            <div>
                <label for=>genre</label>
                <input type='text' name='genre'>
            </div>
            <div>
                <label for=>pays</label>
                <input type='text' name='pays'>
            </div>
            <div>
                <label for=>role_id</label>
                <select name='role_id'>
                    @foreach ($roles as $role)
                        <option value='{{ $role->id }}'>{{ $role->role }}</option>
                    @endforeach
                </select>
            </div>
            <div>
                <label for=>equipe_id</label>
                <select name='equipe_id'>
                    @foreach ($equipes as $equipe)
                        <option value='{{ $equipe->id }}'>{{ $equipe->nom }}</option>
                    @endforeach
                </select>
            </div>

            <button type='submit'>Create</button> {{-- create_blade_anchor --}} 
        </form>
    </div>
@endsection
