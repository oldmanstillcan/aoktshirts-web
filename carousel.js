document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var current = 0;
    var timer;

    function goTo(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startTimer() { timer = setInterval(next, 4000); }
    function resetTimer() { clearInterval(timer); startTimer(); }

    var nextBtn = carousel.querySelector('.carousel-next');
    var prevBtn = carousel.querySelector('.carousel-prev');
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); resetTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); resetTimer(); });
    });

    if (slides.length > 1) startTimer();
  });
});
