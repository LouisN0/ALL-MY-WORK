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
        <form action="{{ route("create.skillinfo-store") }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="competance" class="form-label">competance</label>
                <input type="text" class="form-control" id="competance" name="competance">
            </div>
            <div class="mb-3">
                <label for="pourcentage" class="form-label">pourcentage</label>
                <input type="text" class="form-control" id="pourcentage" name="pourcentage">
            </div>
            <button type="submit" class ="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection