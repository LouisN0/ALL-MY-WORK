@extends("layouts.app")

@section('content')
<h1>testimonialS INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">texe</th>
            <th scope="col">img</th>
            <th scope="col">nom</th>
            <th scope="col">role</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <th scope="row">{{ $testimonialinfos->id }}</th>
                <td>{{ $testimonialinfos->texte }}</td>
                <td>{{ $testimonialinfos->img }}</td>
                <td>{{ $testimonialinfos->nom }}</td>
                <td>{{ $testimonialinfos->role }}</td>
            </tr>
    </tbody>
</table>
@endsection