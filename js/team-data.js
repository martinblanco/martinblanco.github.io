window.team = [
    {
        name: 'Loco 1',
        desc: 'Descripcion',
        img: 'https://dummyimage.com/600x400/dee2e6/000000',
        social: {
            facebook: 'https://www.facebook.com/tu_pagina',
            instagram: 'https://www.instagram.com/tu_pagina',
            x: 'https://twitter.com/tu_pagina',
            youtube: 'https://www.youtube.com/tu_pagina',
            linkedin: 'https://www.linkedin.com/in/tu_pagina',
            whatsapp: 'https://wa.me/5491234567890'
        }
    },
    {
        name: 'Loco 2',
        desc: 'Descripcion',
        img: 'https://dummyimage.com/600x400/dee2e6/000000',
        social: {
            facebook: 'https://www.facebook.com/tu_pagina',
            instagram: 'https://www.instagram.com/tu_pagina',
            x: 'https://twitter.com/tu_pagina',
            youtube: 'https://www.youtube.com/tu_pagina',
            linkedin: 'https://www.linkedin.com/in/tu_pagina',
            whatsapp: 'https://wa.me/5491234567890'
        }
    }
];

window.renderTeam = function(containerId, members) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = members.map(member => `
    <div class="row mb-4">
      <div class="col-md-7">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="${member.img}" alt="${member.name}">
        </a>
      </div>
      <div class="col-md-5">
        <h3>${member.name}</h3>
        <p>${member.desc}</p>
        <div class="d-flex align-items-center">
          ${member.social.facebook ? `<a href="${member.social.facebook}" target="_blank" class="text-black me-3"><i class="fab fa-facebook fa-lg"></i></a>` : ''}
          ${member.social.instagram ? `<a href="${member.social.instagram}" target="_blank" class="text-black me-3"><i class="fab fa-instagram fa-lg"></i></a>` : ''}
          ${member.social.x ? `<a href="${member.social.x}" target="_blank" class="text-black me-3"><i class="fab fa-x-twitter fa-lg"></i></a>` : ''}
          ${member.social.youtube ? `<a href="${member.social.youtube}" target="_blank" class="text-black me-3"><i class="fab fa-youtube fa-lg"></i></a>` : ''}
          ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" class="text-black me-3"><i class="fab fa-linkedin fa-lg"></i></a>` : ''}
          ${member.social.whatsapp ? `<a href="${member.social.whatsapp}" target="_blank" class="text-black me-3"><i class="fab fa-whatsapp fa-lg"></i></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
};