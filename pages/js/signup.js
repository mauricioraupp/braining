const mediaQuery = window.matchMedia("(max-width: 768px)");
const apagar = document.querySelector("#apagar");

if (mediaQuery.matches) {
  apagar.innerHTML = "Nascimento";
}

const password = document.querySelector("#input-password");
const confirmPassword = document.querySelector("#input-password-confirm");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("As senhas não coincidem");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

let button = document.getElementById("button-avancar");

button.onclick = async function(event) {
  event.preventDefault();
  validatePassword();

  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  let name = document.getElementById("input-name").value;
  let date = document.getElementById("input-date").value;
  let email = document.getElementById("input-email").value;
  let passwordValue = document.getElementById("input-password").value;

  let data = {
    name,
    date,
    email,
    password: passwordValue
  };

  try {
    const API_URL = process.env.API_URL || 'http://localhost:3003';
    const response = await fetch(`${API_URL}/api/store/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      alert(content.message);
      window.location.href = './login.html'
    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
  }
};