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

  // Pegue o valor do LocalStorage
  let storedAccount = localStorage.getItem('@account_logged');
  if (storedAccount) {
    storedAccount = JSON.parse(storedAccount);
  } else {
    alert('Nenhuma conta encontrada no LocalStorage.');
    return;
  }

  let data = {
    name,
    date,
    email,
    password: passwordValue,
    storedAccountValue: storedAccount.id // Supondo que você precisa do ID
  };

  try {
    const response = await fetch('http://localhost:3003/api/store/task', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content); // Adicionado para depuração

    if (content.success) {
      alert(content.message);
      // window.location.href = './login.html'
    } else {
      alert(content.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Falha ao conectar com o servidor. Por favor, tente novamente mais tarde.');
  }
};