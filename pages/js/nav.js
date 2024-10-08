document.querySelector("#nav-root").innerHTML = `
<nav>
<ul class="desktop-nav">
  <div>
    <a href="../index.html"><img src="../assets/whiterockettext.png" alt="Logo do site"></a>
    <a href="../index.html">Home</a>
    <a href="#">Sobre</a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui">Contato</a>
  </div>
  <div>
    <a id="nav-item" href="./login.html">Login</a>
    <button>Minijogos</button>
  </div>
</ul>

<ul class="mobile-nav hide">
  <img id="open-menu" src="../assets/align-justify.svg">
  <div>
    <a href="#">Sobre</a>
    <a id="nav-item" href="./login.html">Login</a>
  </div>
</ul>
</nav>

<div class="mobile-menu hide">
<ul>
  <article class="user">
    <img id="user-img">
    <div class="user-wrapper">
      <p id="user-name">Nenhuma conta conectada</p>
    </div>
    <a class="hide" id="nav-item" href="./login.html">Login</a>
  </article>
  <a id="nav-item" href="./login.html">Login</a>
  <a href="../index.html">Home</a>
  <a href="./minigames.html">Minijogos</a>
  <a href="#">Sobre</a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui">Contato</a>
</ul>
<img id="close-menu" src="../assets/x.svg">
</div>
`

const storedAccount2 = localStorage.getItem('@account_logged');
if (storedAccount2) {
  const account = JSON.parse(storedAccount2);
  const navItem = document.querySelectorAll("#nav-item")
  document.querySelector("#user-name").textContent = account.name
  document.querySelector("#user-img").setAttribute("src", `../src/uploads/${account.profile_pic}`)
  navItem.forEach(item => {
    item.textContent = "Conta"
    item.href = "../pages/user_account.html"
  })
}

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