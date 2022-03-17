<h1>ABOUT INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">texte</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($aboutinfos as $aboutinfo)
            <tr>
                <th scope="row">{{ $aboutinfo->id }}</th>
                <td>{{ $aboutinfo->titre }}</td>
                <td>{{ $aboutinfo->texte }}</td>
            </tr>
        @endforeach
    </tbody>
</table>