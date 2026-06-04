document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.main-content');

  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      content.classList.add('is-exiting');
      setTimeout(function () {
        window.location.href = target;
      }, 350);
    });
  });
});
