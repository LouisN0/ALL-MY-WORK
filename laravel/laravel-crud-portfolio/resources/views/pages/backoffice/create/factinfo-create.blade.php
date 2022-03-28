@extends('layouts.app')

@section('content')
    <h1 class="tex-center py-4">Create user</h1>
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
    <div class="container">
        <form action="{{ route("create.factinfo-store") }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="icone" class="form-label">icone</label>
                <input type="text" class="form-control" id="icone" name="icone">
            </div>
            <div class="mb-3">
                <label for="nbrPersonnes" class="form-label">nbrPersonnes</label>
                <input type="text" class="form-control" id="nbrPersonnes" name="nbrPersonnes">
            </div>
            <div class="mb-3">
                <label for="keyWord" class="form-label">keyWord</label>
                <input type="text" class="form-control" id="keyWord" name="keyWord">
            </div>
            <div class="mb-3">
                <label for="texte" class="form-label">texte</label>
                <input type="text" class="form-control" id="texte" name="texte">
            </div>
            <button type="submit" class ="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection