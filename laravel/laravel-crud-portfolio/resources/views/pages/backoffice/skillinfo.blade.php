<h1>SKILL INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">competance</th>
            <th scope="col">pourcentage</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($skillinfos as $skillinfo)
            <tr>
                <th scope="row">{{ $skillinfo->id }}</th>
                <td>{{ $skillinfo->competance }}</td>
                <td>{{ $skillinfo->pourcentage }}</td>
            </tr>
        @endforeach
    </tbody>
</table>