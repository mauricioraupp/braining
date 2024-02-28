function scrollToDiv(div) {
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }

var mediaQuery = window.matchMedia("(max-width: 710px)");
const novoUl = document.querySelector(".novoUl")
const ignore = novoUl.children[4];

if (mediaQuery.matches){
  ignore.remove();
}