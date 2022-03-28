@extends("layouts.app")

@section('content')
<h1>portfolioS INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">img</th>
            <th scope="col">nom</th>
            <th scope="col">filter</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <th scope="row">{{ $portfolioinfos->id }}</th>
                <td>{{ $portfolioinfos->img }}</td>
                <td>{{ $portfolioinfos->nom }}</td>
                <td>{{ $portfolioinfos->filter }}</td>
            </tr>
    </tbody>
</table>
@endsection