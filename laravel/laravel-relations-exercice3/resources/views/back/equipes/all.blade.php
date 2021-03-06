    <div class='container'>
        <h1 class='my-5'>Equipes</h1>
        @if (session()->has('message'))
            <div class='alert alert-success'>
                {{ session()->get('message') }}
            </div>
        @endif
        @if ($errors->any())
            <div class='alert alert-danger'>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <a class='btn btn-success' href='{{ route('equipe.create') }}' role='button'>Create</a>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>nom</th>
                    <th scope='col'>ville</th>
                    <th scope='col'>pays</th>
                    <th scope='col'>attaquants</th>
                    <th scope='col'>centraux</th>
                    <th scope='col'>defenseurs</th>
                    <th scope='col'>remplaçants</th>
                    <th scope='col'>max</th>
                    <th scope='col'>Action</th>
                </tr> {{-- all_tr_anchor --}}
            </thead>
            <tbody>
                @foreach ($equipes as $equipe)
                    <tr>
                        <th scope='row'>{{ $equipe->id }}</th>
                        <td>{{ $equipe->nom }}</td>
                        <td>{{ $equipe->ville }}</td>
                        <td>{{ $equipe->pays }}</td>
                        <td>{{ $equipe->nb_attaquants }}/{{ $equipe->attaquants }}</td>
                        <td>{{ $equipe->nb_centraux }}/{{ $equipe->centraux }}</td>
                        <td>{{ $equipe->nb_defenseurs }}/{{ $equipe->defenseurs }}</td>
                        <td>{{ $equipe->nb_remplaçants }}/{{ $equipe->remplaçants }}</td>
                        <td>{{ $equipe->nb_max }}/{{ $equipe->max }}</td>
                        <td> {{-- all_td_anchor --}}
                            <div class='d-flex'>
                                <form action='{{ route('equipe.destroy', $equipe->id) }}' method='post'>
                                    @csrf
                                    <button class="btn btn-danger" type=submit>Delete</button>
                                </form>
                                <a class='btn btn-warning' href='{{ route('equipe.edit', $equipe->id) }}' role='button'>Edit</a>
                                <a class='btn btn-primary' href='{{ route('equipe.read', $equipe->id) }}' role='button'>Read</a>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
