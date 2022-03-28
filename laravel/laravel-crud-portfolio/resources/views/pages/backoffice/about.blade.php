<h1>ABOUT</h1>

<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($abouts as $about)
            <tr>
                <th scope="row">{{ $about->id }}</th>
                <td>{{ $about->titre }}</td>
                <td>{{ $about->sstitre }}</td>
                <td>
                    <a href="/backoffice/edit/about-edit/{{ $about->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>