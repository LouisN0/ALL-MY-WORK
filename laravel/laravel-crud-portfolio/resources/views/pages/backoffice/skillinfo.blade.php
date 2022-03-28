<h1>SKILL INFO</h1>
<div class="d-flex justify-content-center">
    <a href="/backoffice/create/skillinfo-create"><button class="btn btn-success">Create</button></a>
</div>
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
                <td>
                    <form action="{{ route("skillinfo.destroy", $skillinfo->id) }}" method="POST">
                        @csrf
                        <button class="btn btn-danger" type="submit">delete</button>
                    </form>
                </td>
                <td>
                    <a href="/backoffice/edit/skillinfo-edit/{{ $skillinfo->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/skillinfo-show/{{ $skillinfo->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>