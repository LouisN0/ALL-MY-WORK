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
        <form action="{{ route("create.testimonialinfo-store") }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="texte" class="form-label">texte</label>
                <input type="text" class="form-control" id="texte" name="texte">
            </div>
            <div class="mb-3">
                <label for="img" class="form-label">img</label>
                <input type="text" class="form-control" id="img" name="img">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">nom</label>
                <input type="text" class="form-control" id="nom" name="nom">
            </div>
            <div class="mb-3">
                <label for="role" class="form-label">role</label>
                <input type="text" class="form-control" id="role" name="role">
            </div>
            <button type="submit" class ="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection