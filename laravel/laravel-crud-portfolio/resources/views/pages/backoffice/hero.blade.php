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
            </tr>
        @endforeach
    </tbody>
</table>