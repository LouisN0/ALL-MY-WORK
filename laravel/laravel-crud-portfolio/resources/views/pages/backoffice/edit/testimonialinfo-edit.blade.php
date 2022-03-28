@extends("layouts.app")


@section('content')
<div class="container m-5">
    <h1>Edit SKILL</h1>
</div>

<table class="table d-flex">
    <thead class=" col-3">
        <tr class="d-flex flex-column">
            <th class="fs-4" scope="col">texte</th>
            <th class="fs-4" scope="col">img</th>
            <th class="fs-4" scope="col">nom</th>
            <th class="fs-4" scope="col">role</th>
        </tr>
    </thead>
    <tbody class="col-9">
        <form method="post" action="/backoffice/edit/testimonialinfo-update/{{ $testimonialinfos->id }}">
            @csrf
            <tr class="d-flex flex-column me-5">
                <td><input class="w-100 p-1" type="text" name="texte" value="{{ $testimonialinfos->texte }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="img" value="{{ $testimonialinfos->img }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="nom" value="{{ $testimonialinfos->nom }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="role" value="{{ $testimonialinfos->role }}"></td>
            </tr>
            <div class="m-auto d-flex justify-content-center">
                <button class="btn btn-warning m-5" type="submit">update</button>
            </div>
        </form>
    </tbody>
</table>
@endsection