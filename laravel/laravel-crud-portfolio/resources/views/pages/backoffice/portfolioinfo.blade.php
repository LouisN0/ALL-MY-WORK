<h1>PORTFOLIO INFO</h1>
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
            </tr>
        @endforeach
    </tbody>
</table>