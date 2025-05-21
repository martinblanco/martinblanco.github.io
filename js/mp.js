(function () {
  function $MPC_load() {
    if (window.$MPC_loaded === true) return;

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = document.location.protocol + "//secure.mlstatic.com/mptools/render.js";
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
    window.$MPC_loaded = true;
  }

  if (window.$MPC_loaded !== true) {
    if (window.attachEvent) {
      window.attachEvent('onload', $MPC_load);
    } else {
      window.addEventListener('load', $MPC_load, false);
    }
  }
})();

/*
// Optional: recibir mensaje al cerrar el modal de suscripción
function $MPC_message(event) {
  // console.log("Mensaje recibido:", event.data);
}
if (window.$MPC_loaded !== true) {
  window.addEventListener("message", $MPC_message);
}
*/
