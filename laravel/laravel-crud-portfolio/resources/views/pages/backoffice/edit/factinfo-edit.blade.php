@extends("layouts.app")


@section('content')
<div class="container m-5">
    <h1>Edit fact</h1>
</div>

<table class="table d-flex">
    <thead class=" col-3">
        <tr class="d-flex flex-column">
            <th class="fs-4" scope="col">icone</th>
            <th class="fs-4" scope="col">nombre de personnes</th>
            <th class="fs-4" scope="col">keyWord</th>
            <th class="fs-4" scope="col">texte</th>
        </tr>
    </thead>
    <tbody class="col-9">
        <form method="post" action="/backoffice/edit/factinfo-update/{{ $factinfos->id }}">
            @csrf
            <tr class="d-flex flex-column me-5">
                <td><input class="w-100 p-1" type="text" name="icone" value="{{ $factinfos->icone }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="nbrPersonnes" value="{{ $factinfos->nbrPersonnes }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="keyWord" value="{{ $factinfos->keyWord }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="texte" value="{{ $factinfos->texte }}"></td>
            </tr>
            <div class="m-auto d-flex justify-content-center">
                <button class="btn btn-warning m-5" type="submit">update</button>
            </div>
        </form>
    </tbody>
</table>
@endsection