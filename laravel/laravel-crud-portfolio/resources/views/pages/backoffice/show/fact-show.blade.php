@extends("layouts.app")

@section('content')
<h1>FACT</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <th scope="row">{{ $facts->id }}</th>
                <td>{{ $facts->titre }}</td>
                <td>{{ $facts->sstitre }}</td>
            </tr>
    </tbody>
</table>
@endsection