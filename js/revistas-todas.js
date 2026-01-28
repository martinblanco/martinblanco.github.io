const items = [
  {
    title: '#1',
    img: 'assets/Revista0.jpg',
    badge: 'El Primero',
    stars: 5,
    href: 'pdfs/numero1.pdf'
  },
  {
    title: '#2',
    img: 'https://dummyimage.com/300x388/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero2.pdf'
  },
  {
    title: '#3',
    img: 'https://dummyimage.com/300x388/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero3.pdf'
  },
  {
    title: '#4',
    img: 'https://dummyimage.com/300x388/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero4.pdf'
  },
  {
    title: '#5',
    img: 'https://dummyimage.com/300x388/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero5.pdf'
  },
  {
    title: '#6',
    img: 'https://dummyimage.com/300x400/dee2e6/6c757d.jpg',
    badge: null,
    stars: 0,
    href: 'pdfs/numero6.pdf'
  }
];

function renderStars(stars) {
  return stars > 0 ? `<div class="d-flex justify-content-center small text-warning mb-2">${'★'.repeat(stars)}</div>` : '';
}

function createCardHTML({ title, img, badge, stars }) {
  const badgeHTML = badge ? `<div class="badge bg-dark text-white position-absolute" style="top:.5rem; right:.5rem">${badge}</div>` : '';
  return `
    <div class="card h-100 position-relative">
      ${badgeHTML}
      <img class="card-img-top" src="${img}" alt="${title}" />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder mb-1">${title}</h5>
          ${renderStars(stars)}
        <a href="" target="_blank" class="text-black">
        <i class="fa-solid fa-download"></i>
        </a>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('anterioresContainer');
  if (gridContainer) {
    items.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col mb-5 col-6 col-md-4 col-xl-3';
      col.innerHTML = createCardHTML(item);
      gridContainer.appendChild(col);
    });
  }

  const wrapper = document.getElementById('swiperWrapper');
  if (wrapper) {
    items.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<div class="card h-100">${createCardHTML(item)}</div>`;
      wrapper.appendChild(slide);
    });
  }
});