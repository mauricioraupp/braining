import { setAccount } from './account.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#button-avancar");

  button.onclick = async function(event) {
    event.preventDefault();

    let email = document.querySelector("#email-input").value;
    let password = document.querySelector("#password-input").value;

    let data = { email, password };

    const response = await fetch('http://localhost:3003/api/store/loginTask', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      setAccount(content.data);
      localStorage.setItem('@account_logged', JSON.stringify(content.data));
      localStorage.setItem('@minigame1_info', "");
      alert(content.message);
      window.location.href = './user_account.html';
    } else {
      alert(content.message);
    }
  };
});