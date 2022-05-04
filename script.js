const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle(),$(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    }); })
})
