@extends('back.layouts.app')
@section('content')
    <div class='container'>
        <h1>Photos</h1>
        @if ($errors->any())
            <div class='alert alert-danger'>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form action='{{ route('photo.update' , $photo->id) }}' method='post'>
            @csrf
            <div>
                <label for=>url</label>
                <input type='text' name='url' value='{{ $photo->url }}'>
            </div>
            <button type='submit'>Update</button> {{-- update_blade_anchor --}}
        </form>
    </div>
@endsection
