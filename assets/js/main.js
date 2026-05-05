document.addEventListener('DOMContentLoaded', function () {
  var yearTargets = document.querySelectorAll('[data-year]');
  var currentYear = new Date().getFullYear();

  yearTargets.forEach(function (node) {
    node.textContent = String(currentYear);
  });

  var sections = document.querySelectorAll('.doc-section[id]');
  if (!sections.length) {
    return;
  }

  var sidebarLinks = document.querySelectorAll('.doc-sidebar a[href^="#"]');

  function updateActiveLink() {
    var scrollPosition = window.scrollY + 120;
    var activeId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPosition) {
        activeId = section.id;
      }
    });

    sidebarLinks.forEach(function (link) {
      var target = link.getAttribute('href') || '';
      if (target === '#' + activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
});
