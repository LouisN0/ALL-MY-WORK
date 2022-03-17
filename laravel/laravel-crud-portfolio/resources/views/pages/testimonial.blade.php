<!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="testimonials section-bg">
    <div class="container">

      <div class="section-title">
        <h2>{{ $testimonials[0]->titre }}</h2>
        <p>{{ $testimonials[0]->sstitre }}</p>
      </div>

      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          
          @foreach ($testimonialinfos as $testimonialinfo)
              <div class="swiper-slide">
                <div class="testimonial-item" data-aos="fade-up">
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    {{ $testimonialinfo->texte }}
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={{ asset("img/testimonials/". $testimonialinfo->img) }} class="testimonial-img" alt="">
                  <h3>{{ $testimonialinfo->nom }}</h3>
                  <h4>{{ $testimonialinfo->role }}</h4>
                </div>
              </div><!-- End testimonial item -->
          @endforeach
          
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </section><!-- End Testimonials Section -->