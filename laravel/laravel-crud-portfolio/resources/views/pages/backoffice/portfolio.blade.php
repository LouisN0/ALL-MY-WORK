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
                <td>
                    <a href="/backoffice/edit/portfolio-edit/{{ $portfolio->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/portfolio-show/{{ $portfolio->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>