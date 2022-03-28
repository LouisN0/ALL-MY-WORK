<h1>PORTFOLIO INFO</h1>
<div class="d-flex justify-content-center">
    <a href="/backoffice/create/portfolioinfo-create"><button class="btn btn-success">Create</button></a>
</div>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">img</th>
            <th scope="col">nom</th>
            <th scope="col">filter</th>
            
        </tr>
    </thead>
    <tbody>
        @foreach ($portfolioinfos as $portfolioinfo)
            <tr>
                <th scope="row">{{ $portfolioinfo->id }}</th>
                <td>{{ $portfolioinfo->img }}</td>
                <td>{{ $portfolioinfo->nom }}</td>
                <td>{{ $portfolioinfo->filter }}</td>
                <td>
                    <form action="{{ route("portfolioinfo.destroy", $portfolioinfo->id) }}" method="POST">
                        @csrf
                        <button class="btn btn-danger" type="submit">delete</button>
                    </form>
                </td>
                <td>
                    <a href="/backoffice/edit/portfolioinfo-edit/{{ $portfolioinfo->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/portfolioinfo-show/{{ $portfolioinfo->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>