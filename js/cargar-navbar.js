// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="index.html">Revista</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Info</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="todos.html">Ver Todas</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="informacion.html">Informacion</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex align-items-center">

        <a href="https://www.instagram.com/tu_pagina" target="_blank" class="text-black me-3">
        <i class="fab fa-instagram fa-lg"></i>
        </a>

        <a href="https://www.youtube.com/tu_pagina" target="_blank" class="text-black me-3">
        <i class="fab fa-youtube fa-lg"></i>
        </a>

        <a href="https://wa.me/5491234567890" target="_blank" class="text-black me-3">
        <i class="fab fa-whatsapp fa-lg"></i>
        </a>

        <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808496b4a3e80196bb71652402c7"
        name="MP-payButton" class="btn btn-outline-dark ms-2">Suscribirme</a>

        </form>
      </div>
    </div>
  </nav>`;

  const container = document.getElementById("navbar-container");
  if(container) {
    container.innerHTML = navbarHTML;
  }
});
