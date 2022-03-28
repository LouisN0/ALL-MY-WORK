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
                <td>
                    <a href="/backoffice/edit/fact-edit/{{ $fact->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                
                <td>
                    <a href="/backoffice/show/fact-show/{{ $fact->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>