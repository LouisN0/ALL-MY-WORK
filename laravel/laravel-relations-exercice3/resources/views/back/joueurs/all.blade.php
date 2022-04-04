
    <div class='container'>
        <h1 class='my-5'>Joueurs</h1>
        @if (session()->has('message'))
            <div class='alert alert-success'>
                {{ session()->get('message') }}
            </div>
        @endif
        @if (session()->has('warning'))
            <div class='alert alert-danger'>
                {{ session()->get('warning') }}
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
        <a class='btn btn-success' href='{{ route('joueur.create') }}' role='button'>Create</a>
        <table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>photo</th>
                    <th scope='col'>nom</th>
                    <th scope='col'>prenom</th>
                    <th scope='col'>age</th>
                    <th scope='col'>telephone</th>
                    <th scope='col'>mail</th>
                    <th scope='col'>genre</th>
                    <th scope='col'>pays</th>
                    <th scope='col'>role</th>
                    <th scope='col'>equipe</th>
                    <th scope='col'>Action</th>
                </tr> {{-- all_tr_anchor --}}
            </thead>
            <tbody>
                @foreach ($joueurs as $joueur)
                    <tr>
                        <th scope='row'>{{ $joueur->id }}</th>
                        <td><img class=" rounded mx-auto d-block img-fluid" src="/img/{{ $joueur->photo->img }}" alt=""></td>
                        <td>{{ $joueur->nom }}</td>
                        <td>{{ $joueur->prenom }}</td>
                        <td>{{ $joueur->age }}</td>
                        <td>{{ $joueur->telephone }}</td>
                        <td>{{ $joueur->mail }}</td>
                        <td>{{ $joueur->genre }}</td>
                        <td>{{ $joueur->pays }}</td>
                        <td>{{ $joueur->role->role }}</td>
                        <td>{{ $joueur->equipe->nom }}</td>
                        <td> {{-- all_td_anchor --}}
                            <div class='d-flex'>
                                <form action='{{ route('joueur.destroy', $joueur->id) }}' method='post'>
                                    @csrf
                                    <button class='btn btn-danger' type=submit>Delete</button>
                                </form>
                                <a class='btn btn-warning' href='{{ route('joueur.edit', $joueur->id) }}' role='button'>Edit</a>
                                <a class='btn btn-primary' href='{{ route('joueur.read', $joueur->id) }}' role='button'>Read</a>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
