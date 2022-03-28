@extends("layouts.app")

@section('content')
<h1>contact</h1>
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
                <th scope="row">{{ $contacts->id }}</th>
                <td>{{ $contacts->titre }}</td>
                <td>{{ $contacts->sstitre }}</td>
            </tr>
    </tbody>
</table>
@endsection