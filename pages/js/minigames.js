
const memoryGame = document.querySelector('#art-1');
const memoryGamePopup = document.querySelector('.memory-game-popup');
const closePopup = document.querySelector('#close-popup');

memoryGame.addEventListener('click', function() {
  setTimeout(() => {
    memoryGamePopup.style.opacity = '1';
    memoryGamePopup.style.zIndex = '1';
  },100)
});

closePopup.addEventListener('click', function() {
  memoryGamePopup.style.opacity = '0';
  memoryGamePopup.style.zIndex = '-1';
})

const navObjects = {
  desktopNav: document.querySelector(".desktop-nav"),
  mobileNav: document.querySelector(".mobile-nav"),
  mobileMenu: document.querySelector(".mobile-menu"),
  openMenu: document.querySelector("#open-menu"),
  closeMenu: document.querySelector("#close-menu"),
  ulMenu: document.querySelector(".mobile-menu ul")
}

const mediaQuery1 = window.matchMedia("(max-width: 768px)");

if (mediaQuery1.matches) {
  navObjects.desktopNav.classList.toggle("hide");
  navObjects.mobileNav.classList.toggle("hide");
}

navObjects.openMenu.addEventListener('click', function() {
  navObjects.mobileMenu.classList.remove("hide")
  navObjects.ulMenu.style.transition = '1s';
  setTimeout(() => {
    navObjects.ulMenu.style.width = '320px';
  }, 100)

})

navObjects.closeMenu.addEventListener('click', function() {
  navObjects.mobileMenu.classList.add("hide")
  navObjects.ulMenu.style.transition = '0s';
  navObjects.ulMenu.style.width = '';
})