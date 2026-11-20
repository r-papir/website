// Sidebar: show/hide the Columbia email under "Columbia University"
(function () {
  var btn = document.getElementById('columbia-toggle');
  var item = document.getElementById('columbia-email');
  if (!btn || !item) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.setAttribute('aria-label', open ? 'Show Columbia email' : 'Hide Columbia email');
    item.style.display = open ? 'none' : 'flex';
    btn.querySelector('i').style.transform = open ? '' : 'rotate(180deg)';
  });
})();
