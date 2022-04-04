@extends('front.layouts.app')
@section('content')
    <a class="btn btn-warning" href={{ route('joueur.create') }}>create a player</a>
    <a class="btn btn-warning" href={{ route('equipe.create') }}>create a team</a>
    
    <a class="btn btn-warning" href={{ url('/back') }}>goo to back</a>
<p>une section ( 2 équipes remplies au hasard )</p>
    <section>
        @foreach ($equipes as $equipe)
            @if ($equipe->max === $equipe->nb_mx)
                <div class="alert alert-danger">
                    <p>{{ $equipe->nom }} is full</p>
                </div>
                
            @endif
        @endforeach
        
    </section>
    <p>une section ( 4 joueurs sans équipes au hasard )</p>
    <section>
        @foreach ($joueurs as $joueur)
            @if ($joueur->equipe_id === null)
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$joueur->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $joueur->nom }}</h5>
                        <p class="card-text">{{ $joueur->poste }}</p>
                        <a href="{{ route('joueur.read', $joueur->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('joueur.edit', $joueur->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('joueur.destroy', $joueur->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach

        
    </section>
    <p>une section ( 4 joueurs avec équipe )</p>
    <section>
        @foreach ($joueurs as $joueur)
        @if ($joueur->equipe_id !== null)
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="{{ asset('storage/'.$joueur->image) }}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ $joueur->nom }}</h5>
                    <p class="card-text">{{ $joueur->poste }}</p>
                    <a href="{{ route('joueur.read', $joueur->id) }}" class="btn btn-primary">show</a>
                    <a href="{{ route('joueur.edit', $joueur->id) }}" class="btn btn-warning">edit</a>
                    <form action="{{ route('joueur.destroy', $joueur->id) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">delete</button>
                    </form>
                </div>
            </div>
        @endif
    @endforeach
    </section>
    <P>une section ( 2 équipes non remplies au hasard )</P>
    <section>
        
        @foreach ($equipes as $equipe)
            @if ($equipe->max !== $equipe->nb_mx)
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$equipe->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $equipe->nom }}</h5>
                        <p class="card-text">{{ $equipe->poste }}</p>
                        <a href="{{ route('equipe.read', $equipe->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('equipe.edit', $equipe->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('equipe.destroy', $equipe->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach
    </section>
    <p>une section ( les equipes d'europes )</p>
    <section>
        @foreach ($equipes as $equipe)
            @if ($equipe->pays === 'europe')
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$equipe->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $equipe->nom }}</h5>
                        <p class="card-text">{{ $equipe->poste }}</p>
                        <a href="{{ route('equipe.read', $equipe->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('equipe.edit', $equipe->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('equipe.destroy', $equipe->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach
    </section>
    <p>une section ( les équipes hors europes )</p>
    <section>
        @foreach ($equipes as $equipe)
            @if ($equipe->pays === 'hors europe')
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$equipe->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $equipe->nom }}</h5>
                        <p class="card-text">{{ $equipe->poste }}</p>
                        <a href="{{ route('equipe.read', $equipe->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('equipe.edit', $equipe->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('equipe.destroy', $equipe->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach
    </section>
    <p>une section ( les joueurs qui représente leur pays( meme pays dorigine que l'équipe dans la quelle ils jouent )</p>
    <section>
        @foreach ($equipes as $equipe)
            @foreach ($joueurs as $joueur)
                @if ($joueur->equipe_id != null)
                    @if ($joueur->pays === $equipe->pays)
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="{{ asset('storage/'.$joueur->image) }}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{ $joueur->nom }}</h5>
                                <p class="card-text">{{ $joueur->poste }}</p>
                                <a href="{{ route('joueur.read', $joueur->id) }}" class="btn btn-primary">show</a>
                                <a href="{{ route('joueur.edit', $joueur->id) }}" class="btn btn-warning">edit</a>
                                <form action="{{ route('joueur.destroy', $joueur->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">delete</button>
                                </form>
                            </div>
                        </div>
                    @endif
                @endif
            @endforeach
    @endforeach
    </section>
    <p>Une section 5 joueuses au hasard qui ont une équipe !</p>
    <section>
        @foreach ($joueurs as $joueur)
            @if ($joueur->genre === 'F' && $joueur->genre === 'f')
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$joueur->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $joueur->nom }}</h5>
                        <p class="card-text">{{ $joueur->poste }}</p>
                        <a href="{{ route('joueur.read', $joueur->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('joueur.edit', $joueur->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('joueur.destroy', $joueur->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach
    </section>
    <p>Une section 5 joueurs homme et qui ont une équipe !</p>
    <section>
        @foreach ($joueurs as $joueur)
            @if ($joueur->genre === 'M' && $joueur->genre === 'm')
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="{{ asset('storage/'.$joueur->image) }}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ $joueur->nom }}</h5>
                        <p class="card-text">{{ $joueur->poste }}</p>
                        <a href="{{ route('joueur.read', $joueur->id) }}" class="btn btn-primary">show</a>
                        <a href="{{ route('joueur.edit', $joueur->id) }}" class="btn btn-warning">edit</a>
                        <form action="{{ route('joueur.destroy', $joueur->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">delete</button>
                        </form>
                    </div>
                </div>
            @endif
        @endforeach
    </section>
@endsection