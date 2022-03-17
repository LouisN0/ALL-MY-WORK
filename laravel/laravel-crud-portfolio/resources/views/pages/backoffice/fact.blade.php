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
        @foreach ($facts as $fact)
            <tr>
                <th scope="row">{{ $fact->id }}</th>
                <td>{{ $fact->titre }}</td>
                <td>{{ $fact->sstitre }}</td>
            </tr>
        @endforeach
    </tbody>
</table>