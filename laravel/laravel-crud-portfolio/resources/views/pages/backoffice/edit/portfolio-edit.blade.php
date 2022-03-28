@extends("layouts.app")


@section('content')
<div class="container m-5">
    <h1>Edit About</h1>
</div>

<table class="table d-flex">
    <thead class=" col-3">
        <tr class="d-flex flex-column">
            <th class="fs-4" scope="col">titre</th>
            <th class="fs-4" scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody class="col-9">
        <form method="post" action="/backoffice/edit/portfolio-update/{{ $portfolios->id }}">
            @csrf
            <tr class="d-flex flex-column me-5">
                <td><input class="w-100 p-1" type="text" name="titre" value="{{ $portfolios->titre }}"></td>
                <td><input class="w-100 h-100 p-1" type="text" name="sstitre" value="{{ $portfolios->sstitre }}"></td>
            </tr>
            <div class="m-auto d-flex justify-content-center">
                <button class="btn btn-warning m-5" type="submit">update</button>
            </div>
        </form>
    </tbody>
</table>
@endsection