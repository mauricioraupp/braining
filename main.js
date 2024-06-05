const buttonFirst = document.querySelector('.first-button');
const buttonNav = document.querySelector('nav ul div button');

buttonFirst.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});
buttonNav.addEventListener('click', function() {
  window.location.href = 'html/minigames.html';
});



let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

const navObjects = {
  desktopNav: document.querySelector(".desktop-nav"),
  mobileNav: document.querySelector(".mobile-nav"),
  mobileMenu: document.querySelector(".mobile-menu"),
  openMenu: document.querySelector("#open-menu"),
  closeMenu: document.querySelector("#close-menu")
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  navObjects.desktopNav.classList.toggle("hide");
  navObjects.mobileNav.classList.toggle("hide");
}

navObjects.openMenu.addEventListener('click', function() {
  navObjects.mobileMenu.classList.remove("hide")
})

navObjects.closeMenu.addEventListener('click', function() {
  navObjects.mobileMenu.classList.add("hide")
})