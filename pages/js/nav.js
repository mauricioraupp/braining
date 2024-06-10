const account = JSON.parse(storedAccount);
document.querySelector("#user-name").textContent = account.name
document.querySelector("#user-id").textContent = `ID: ${account.id}`

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
  closeMenu: document.querySelector("#close-menu"),
  ulMenu: document.querySelector(".mobile-menu ul")
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
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

// if(storedAccount){
//   document.querySelector(".login-text").textContent = "Perfil"
//   document.querySelector(".login-href").setAttribute("href, pages/user_account.html")
// }