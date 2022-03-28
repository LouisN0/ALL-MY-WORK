@extends("layouts.app")

@section('content')
<h1>FACT INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">icone</th>
            <th scope="col">nombre de personnes</th>
            <th scope="col">keyWord</th>
            <th scope="col">texte</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <th scope="row">{{ $factinfos->id }}</th>
                <td>{{ $factinfos->icone }}</td>
                <td>{{ $factinfos->nbrPersonnes }}</td>
                <td>{{ $factinfos->keyWord }}</td>
                <td>{{ $factinfos->texte }}</td>
            </tr>
    </tbody>
</table>
@endsection