<!-- ======= Facts Section ======= -->
<section id="facts" class="facts">
    <div class="container">

      <div class="section-title">
        <h2>{{ $facts[0]->titre }}</h2>
        <p>{{ $facts[0]->sstitre }}</p>
      </div>

      <div class="row no-gutters">

      @foreach ($factinfos as $factinfo)
          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div class="count-box">
            <i class={{ $factinfo->icone }}></i>
            <span data-purecounter-start="0" data-purecounter-end={{ $factinfo->nbrPersonnes }} data-purecounter-duration="1" class="purecounter"></span>
            <p><strong>{{ $factinfo->keyWord }}</strong>{{$factinfo->texte}}</p>
          </div>
        </div>
      @endforeach

      </div>

    </div>
  </section><!-- End Facts Section -->