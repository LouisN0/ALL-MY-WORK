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
        @foreach ($factinfos as $factinfo)
            <tr>
                <th scope="row">{{ $factinfo->id }}</th>
                <td>{{ $factinfo->icone }}</td>
                <td>{{ $factinfo->nbrPersonnes }}</td>
                <td>{{ $factinfo->keyWord }}</td>
                <td>{{ $factinfo->texte }}</td>
            </tr>
        @endforeach
    </tbody>
</table>