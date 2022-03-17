<h1>CONTACT INFO</h1>
<table class='content-table'>
    <thead>
        <tr>
            <th scope="col">#id</th>
            <th scope="col">address</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">carte</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($contactinfos as $contactinfo)
            <tr>
                <th scope="row">{{ $contactinfo->id }}</th>
                <td>{{ $contactinfo->address }}</td>
                <td>{{ $contactinfo->email }}</td>
                <td>{{ $contactinfo->phone }}</td>
                <td>{{ $contactinfo->carte }}</td>
            </tr>
        @endforeach
    </tbody>
</table>