@extends("back.layouts.app")

@section('content')
    <div class="sidebar">
        <div class="logo-details">
            <i class='bx bxl-c-plus-plus icon'></i>
            <div class="logo_name">Volley Team</div>
            <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav-list">
            <li>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search...">
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href={{ url("/back/equipes") }} }}>
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Equipes</span>
                </a>
                <span class="tooltip">Equipes</span>
            </li>
            <li>
                <a href={{ url("/back/joueurs") }}>
                    <i class='bx bx-user'></i>
                    <span class="links_name">Joueurs</span>
                </a>
                <span class="tooltip">Joueurs</span>
            </li>
           
            <li class="profile">
                <div class="profile-details">
                    <!--<img src="profile.jpg" alt="profileImg">-->
                    <div class="name_job">
                        <div class="name">LouisN0</div>
                        <div class="job">Web designer</div>
                    </div>
                </div>
                <a href={{ url('/') }}>
                    <i class='bx bx-log-out' id="log_out"></i>
                </a>
            </li>
        </ul>
    </div>
    <section class="home-section">
        <div>
            @if (request()->path() === 'back/equipes')
                @include('back.equipes.all')
            @endif

            @if (request()->path() === 'back/joueurs')
                @include('back.joueurs.all')
            @endif

        </div>
    </section>
@endsection

