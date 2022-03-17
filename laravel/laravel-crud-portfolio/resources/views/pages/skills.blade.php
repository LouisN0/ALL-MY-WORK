<!-- ======= Skills Section ======= -->
<section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title">
        <h2>{{ $skills[0]->titre }}</h2>
        <p>{{ $skills[0]->sstitre }}</p>
      </div>

      <div class="row skills-content">

        <div class="col-lg-12 d-flex flex-wrap" data-aos="fade-up">
          @foreach ($skillinfos as $skillinfo)
            <div class="progress me-5">
              <span class="skill">{{ $skillinfo->competance }} <i class="val">{{ $skillinfo->pourcentage }}%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow={{ $skillinfo->pourcentage }} aria-valuemin="0" aria-valuemax={{ $skillinfo->pourcentage }}></div>
              </div>
            </div>  
          @endforeach
          

        </div>

      </div>

    </div>
  </section><!-- End Skills Section -->