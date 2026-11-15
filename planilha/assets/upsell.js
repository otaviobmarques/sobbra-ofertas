// Mostra o botão reserva quando o código da Cakto ainda não foi colado na página.
(function () {
  var mapa = window.SOBBRA_CHECKOUT || {};
  document.querySelectorAll('.cta').forEach(function (cta) {
    var slot = cta.querySelector('.cakto-slot');
    var temCakto = slot && slot.querySelector('*');
    if (temCakto) return;
    var fb = cta.querySelector('.fallback');
    var link = mapa[cta.getAttribute('data-oferta')];
    var sim = fb.querySelector('[data-role=sim]');
    if (link) { sim.href = link; } else { sim.removeAttribute('href'); sim.classList.add('off'); sim.title = 'Link do checkout ainda não configurado'; }
    fb.hidden = false;
  });
})();
