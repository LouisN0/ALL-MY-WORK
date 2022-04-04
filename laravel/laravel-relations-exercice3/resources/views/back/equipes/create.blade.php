@extends('back.layouts.app')
@section('content')
    <div class='container'>
        <h1>Equipes</h1>
        @if ($errors->any())
            <div class='alert alert-danger'>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form action='{{ route('equipe.store') }}' method='post'>
            @csrf
            <div>
                <label for=>nom</label>
                <input type='text' name='nom'>
            </div>
            <div>
                <label for=>ville</label>
                <input type='text' name='ville'>
            </div>
            <div>
                <label for=>pays</label>
                <input type='text' name='pays'>
            </div>
            <div>
                <label for=>attaquants</label>
                <input type='text' name='attaquants'>
            </div>
            <div>
                <label for=>centraux</label>
                <input type='text' name='centraux'>
            </div>
            <div>
                <label for=>defenseurs</label>
                <input type='text' name='defenseurs'>
            </div>
            <div>
                <label for=>remplaçants</label>
                <input type='text' name='remplaçants'>
            </div>
            <div>
                <label for=>max</label>
                <input type='text' name='max'>
            </div>
            <button type='submit'>Create</button> {{-- create_blade_anchor --}} 
        </form>
    </div>
@endsection
