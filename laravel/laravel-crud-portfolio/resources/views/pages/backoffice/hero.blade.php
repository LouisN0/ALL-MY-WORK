<h1>HOME</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">attributs</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($heros as $hero)
            <tr>
                <th scope="row">{{ $hero->id }}</th>
                <td>{{ $hero->titre }}</td>
                <td>{{ $hero->attributs }}</td>
                <td>
                <a href="/backoffice/edit/hero-edit/{{ $hero->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
            </tr>
            
        @endforeach
    </tbody>
</table>