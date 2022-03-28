<h1>TESTIMONIAL</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($testimonials as $testimonial)
            <tr>
                <th scope="row">{{ $testimonial->id }}</th>
                <td>{{ $testimonial->titre }}</td>
                <td>{{ $testimonial->sstitre }}</td>
                <td>
                    <a href="/backoffice/edit/testimonial-edit/{{ $testimonial->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                <td>
                    <a href="/backoffice/show/testimonial-show/{{ $testimonial->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>