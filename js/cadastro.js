const mediaQuery = window.matchMedia("(max-width: 768px)");
const apagar = document.querySelector("#apagar");

if (mediaQuery.matches){
  apagar.innerHTML = "Nascimento"
};


const password = document.querySelector("#input-password");
const confirmPassword = document.querySelector("#input-password-confirm");

function validatePassword(){
    if(password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("As senhas não coincidem");
    } else {
      confirmPassword.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirmPassword.onkeyup = validatePassword;