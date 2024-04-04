var mediaQuery = window.matchMedia("(max-width: 768px)");
const novoUl = document.querySelector(".novoUl");
const ignore = novoUl.children[4];

if (mediaQuery.matches){
ignore.remove();
}