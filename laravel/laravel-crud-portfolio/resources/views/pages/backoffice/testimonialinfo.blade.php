<h1>TESTIMONIAL INFO</h1>
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
            </tr>
        @endforeach
    </tbody>
</table>