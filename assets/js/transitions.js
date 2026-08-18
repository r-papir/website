document.addEventListener('DOMContentLoaded', function () {
  var exitingElements = document.querySelectorAll('.main-content, .corner-mascot');

  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      exitingElements.forEach(function (el) {
        el.classList.add('is-exiting');
      });
      setTimeout(function () {
        window.location.href = target;
      }, 800);
    });
  });
});
