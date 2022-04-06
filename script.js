const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle);




navLinks.forEach((l) => {
  l.addEventListener("click", closeOnClick());
});


function closeOnClick() {
  if (window.innerWidth < 1400) {
    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        bsCollapse.toggle();
      });
    });
  } else {
}
}


