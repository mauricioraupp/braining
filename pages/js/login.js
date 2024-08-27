document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#button-avancar");

  button.onclick = async function(event) {
    event.preventDefault();

    let email = document.querySelector("#email-input").value;
    let password = document.querySelector("#password-input").value;

    const response = await fetch(`http://localhost:3003/api/store/login?email=${email}&password=${password}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    let content = await response.json();

    if (content.success) {
      let account = content.data;
      account.date = account.date.split('T')[0];
      localStorage.setItem('@account_logged', JSON.stringify(account));
      alert(content.message);
      window.location.href = './user_account.html';
    } else {
      alert(content.message);
    }
  };
});
