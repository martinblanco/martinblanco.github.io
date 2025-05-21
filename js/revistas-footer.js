const items = [
  {
    title: '#1',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#2',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: 'ejemplo',
    stars: 0,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#3',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: 'Version épica',
    stars: 0,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#4',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#5',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#6',
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero1.pdf'
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('swiperWrapper');

  items.forEach(({ title, img, badge, stars }) => {
    const badgeHTML = badge
      ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${badge}</div>`
      : '';

    const starsHTML = stars > 0
      ? `<div class="d-flex justify-content-center small text-warning mb-2">` +
        '★'.repeat(stars).split('').map(() => `<div class="bi-star-fill">★</div>`).join('') +
        `</div>`
      : '';

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="card h-100">
        ${badgeHTML}
        <img class="card-img-top" src="${img}" alt="..." />
        <div class="card-body p-4 text-center">
          <h5 class="fw-bolder">${title}</h5>
          ${starsHTML}
        </div>
        <div class="card-footer text-center bg-transparent">
          <a class="btn btn-outline-dark mt-auto" href="#">Descargar PDF</a>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);
  });
});