@extends("layouts.app")

@section('content')
<h1>SKILLS INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">competance</th>
            <th scope="col">pourcentage</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <th scope="row">{{ $skillinfos->id }}</th>
                <td>{{ $skillinfos->competance }}</td>
                <td>{{ $skillinfos->pourcentage }}</td>
            </tr>
    </tbody>
</table>
@endsection