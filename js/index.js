window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('burger-active')
    document.querySelector('.header-nav').classList.toggle('header-nav-active')
  })

  document.querySelector('.search').addEventListener('click', function () {
    document.querySelector('.search').classList.toggle('search-active')
    document.querySelector('.search-form').classList.toggle('search-form-active')
  })

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: true,
  });

  document.querySelectorAll('.steps__btn').forEach(function(stepsBtn) {
    stepsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path

      document.querySelectorAll('.steps__btn').forEach(function(btn) {
        btn.classList.remove('steps__btn--active')
      })
      e.currentTarget.classList.add('steps__btn--active')

      document.querySelectorAll('.how-article').forEach(function(StepsContent) {
        StepsContent.classList.remove('how-article--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-article--active')
    })
  })

  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      active: false,
      collapsible: true,
      icons: false
    });
  })
})
