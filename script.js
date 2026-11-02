(function () {
  var items = document.querySelectorAll('.nav-item');
  function closeAll() {
    items.forEach(function (it) {
      var m = it.querySelector('.menu'), b = it.querySelector('.caret');
      if (m && b) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); }
    });
  }
  items.forEach(function (it) {
    var m = it.querySelector('.menu'), b = it.querySelector('.caret');
    if (!m || !b || !m.querySelector('li')) return;
    b.hidden = false;
    b.addEventListener('click', function () {
      var wasOpen = b.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!wasOpen) { m.hidden = false; b.setAttribute('aria-expanded', 'true'); }
    });
    m.addEventListener('click', closeAll);
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.nav-item')) closeAll(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
})();
