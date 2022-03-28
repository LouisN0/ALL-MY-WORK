<h1>TESTIMONIAL INFO</h1>
<div class="d-flex justify-content-center">
    <a href="/backoffice/create/testimonialinfo-create"><button class="btn btn-success">Create</button></a>
</div>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">texte</th>
            <th scope="col">image utilisteur</th>
            <th scope="col">nom</th>
            <th scope="col">role</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($testimonialinfos as $testimonialinfo)
            <tr>
                <th scope="row">{{ $testimonialinfo->id }}</th>
                <td>{{ $testimonialinfo->texte }}</td>
                <td>{{ $testimonialinfo->img }}</td>
                <td>{{ $testimonialinfo->nom }}</td>
                <td>{{ $testimonialinfo->role }}</td>
                <td>
                    <form action="{{ route("testimonialinfo.destroy", $testimonialinfo->id) }}" method="POST">
                        @csrf
                        <button class="btn btn-danger" type="submit">delete</button>
                    </form>
                </td>
                <td>
                    <a href="/backoffice/edit/testimonialinfo-edit/{{ $testimonialinfo->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/testimonialinfo-show/{{ $testimonialinfo->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>