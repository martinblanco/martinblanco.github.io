 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
  1200: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  }
}
    });