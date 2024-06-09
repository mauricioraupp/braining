document.addEventListener('DOMContentLoaded', () => {
  const storedAccount = localStorage.getItem('@account_logged');
  
  if (storedAccount) {
    const account = JSON.parse(storedAccount);
    document.querySelector("#input-name").value = account.name;
    document.querySelector("#input-email").value = account.email;
    // document.querySelector("#input-date").value = account.date;
    document.querySelector("#input-password").value = account.password;
    document.querySelector("#user-idd").textContent = `ID: ${account.id}`
  } else {
    console.error('Nenhuma conta está logada.');
  }
});