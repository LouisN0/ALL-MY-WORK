<h1>CONTACT</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">titre</th>
            <th scope="col">sous titre</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($contacts as $contact)
            <tr>
                <th scope="row">{{ $contact->id }}</th>
                <td>{{ $contact->titre }}</td>
                <td>{{ $contact->sstitre }}</td>
                <td>
                    <a href="/backoffice/edit/contact-edit/{{ $contact->id }}"><button class="btn btn-warning">Edit</button></a>
                </td>
                
                <td>
                    <a href="/backoffice/show/contact-show/{{ $contact->id }}"><button class="btn btn-warning">show</button></a>
                </td>
            </tr>

        @endforeach
    </tbody>
</table>