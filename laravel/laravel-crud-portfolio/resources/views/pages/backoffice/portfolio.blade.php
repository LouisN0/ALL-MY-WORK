<h1>PORTFOLIO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($portfolios as $portfolio)
            <tr>
                <th scope="row">{{ $portfolio->id }}</th>
                <td>{{ $portfolio->titre }}</td>
                <td>{{ $portfolio->sstitre }}</td>
            </tr>
        @endforeach
    </tbody>
</table>