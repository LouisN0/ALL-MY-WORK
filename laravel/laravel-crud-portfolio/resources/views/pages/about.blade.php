<!-- ======= About Section ======= -->
<section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>{{ $abouts[0]->titre }}</h2>
        <p>{{ $abouts[0]->sstitre }}</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src={{ asset("img/profile-img.jpg") }} class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{{ $abouts[0]->titreDetail }}</h3>
          <p class="fst-italic">{{ $abouts[0]->sstitreDetail }}</p>
          <div class="row">
            <div class="col-lg-6">
              <ul class='d-flex'>
              @foreach ($aboutinfos as $aboutinfo)
                <li><i class="bi bi-chevron-right"></i> <strong>{{ $aboutinfo->titre }}:</strong> <span>{{ $aboutinfo->texte }}</span></li>
              @endforeach
              </ul>
            </div>
          </div>
          <p>{{ $abouts[0]->description }}</p>
        </div>
      </div>

    </div>
  </section><!-- End About Section -->