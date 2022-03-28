<h1>FACT INFO</h1>
<div class="d-flex justify-content-center">
    <a href="/backoffice/create/factinfo-create"><button class="btn btn-success">Create</button></a>
</div>
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
                <td>
                    <form action="{{ route("factinfo.destroy", $factinfo->id) }}" method="POST">
                        @csrf
                        <button class="btn btn-danger" type="submit">delete</button>
                    </form>
                </td>
                <td>
                    <a href="/backoffice/edit/factinfo-edit/{{ $factinfo->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/factinfo-show/{{ $factinfo->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>