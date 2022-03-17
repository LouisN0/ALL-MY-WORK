@extends("layouts.app")


@section('content')
<!-- ======= Header ======= -->
<header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src={{ asset("img/profile-img.jpg") }} alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
        
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="/backoffice/hero" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="/backoffice/about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="/backoffice/fact" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Facts</span></a></li>
          <li><a href="/backoffice/skill" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Skills</span></a></li>
          <li><a href="/backoffice/portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="/backoffice/testimonial" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Testimonial</span></a></li>
          <li><a href="/backoffice/contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->

    <section class="container">
        <div>
            <h1>Bienvenu dans le backoffice</h1>
        </div>
        <div class="text">Dashboard</div>
        <div>
            @if (request()->path() === 'backoffice/about')
                @include('pages.backoffice.about')
                @include('pages.backoffice.aboutinfo')
            @endif

             @if (request()->path() === 'backoffice/hero')
                @include('pages.backoffice.hero')
            @endif


            @if (request()->path() === 'backoffice/fact')
                @include('pages.backoffice.fact')
                @include('pages.backoffice.factinfo')
            @endif

            @if (request()->path() === 'backoffice/skill')
                @include('pages.backoffice.skill')
                @include('pages.backoffice.skillinfo')
            @endif

            @if (request()->path() === 'backoffice/portfolio')
                @include('pages.backoffice.portfolio')
                @include('pages.backoffice.portfolioinfo')
            @endif 
            @if (request()->path() === 'backoffice/testimonial')
                @include('pages.backoffice.testimonial')
                @include('pages.backoffice.testimonialinfo')
            @endif 
            @if (request()->path() === 'backoffice/contact')
                @include('pages.backoffice.contact')
                @include('pages.backoffice.contactinfo')
            @endif 

        </div>
    </section>
    
    <!-- ======= Footer ======= -->
<footer id="footer">
    <div class="container d-flex justify-content-center flex-column">
      <button class="btn rounded-pill fs-6 mx-auto mb-5 btn-outline-info"><a href={{ url('/') }}>Back</a></button>
      <div class="copyright">
        &copy; Copyright <strong><span>iPortfolio</span></strong>
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End  Footer -->
@endsection