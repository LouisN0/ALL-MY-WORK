@extends("layouts.app")


@section('content')
<div class="container m-5">
    <h1>Edit SKILL</h1>
</div>

<table class="table d-flex">
    <thead class=" col-3">
        <tr class="d-flex flex-column">
            <th class="fs-4" scope="col">competance</th>
            <th class="fs-4" scope="col">pourcentage</th>
        </tr>
    </thead>
    <tbody class="col-9">
        <form method="post" action="/backoffice/edit/skillinfo-update/{{ $skillinfos->id }}">
            @csrf
            <tr class="d-flex flex-column me-5">
                <td><input class="w-100 p-1" type="text" name="competance" value="{{ $skillinfos->competance }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="pourcentage" value="{{ $skillinfos->pourcentage }}"></td>
            </tr>
            <div class="m-auto d-flex justify-content-center">
                <button class="btn btn-warning m-5" type="submit">update</button>
            </div>
        </form>
    </tbody>
</table>
@endsection