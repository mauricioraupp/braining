var mediaQuery = window.matchMedia("(max-width: 768px)");
const apagar = document.querySelector("#apagar");

if (mediaQuery.matches){
  apagar.innerHTML = "Nascimento"
};