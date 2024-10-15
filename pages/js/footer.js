let instagramSvg;
let githubSvg;
let linkedinSvg;
let emailSvg;

(function checkDocument() {
  if (document.title === "Braining - Página inicial") {
    instagramSvg = "assets/instagram.svg"
    githubSvg = "assets/github.svg"
    linkedinSvg = "assets/linkedin.svg"
    emailSvg = "assets/mail.svg"
  } else {
    instagramSvg = "../assets/instagram.svg"
    githubSvg = "../assets/github.svg"
    linkedinSvg = "../assets/linkedin.svg"
    emailSvg = "../assets/mail.svg"
  }
})();

document.querySelector("#footer-root").innerHTML = `
  <footer>
    <article>
      <a href="https://www.instagram.com/mauricioraupp_" 
      target="blank" rel="noopener noreferrer"><img src="${instagramSvg}" alt="Logo do instagram"></a>
      <a href="https://github.com/mauricioraupp" 
      target="blank" rel="noopener noreferrer"><img src="${githubSvg}" alt="Logo do github"></a>
      <a href="https://www.linkedin.com/in/mauricioraupp1/" 
      target="blank" rel="noopener noreferrer"><img src="${linkedinSvg}" alt="Logo do linkedin"></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui"
      target="blank" rel="noopener noreferrer"><img src="${emailSvg}" alt="Logo do email"></a>
    </article>
    <div>
      <a href="#">Sobre</a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui">Contato</a>
      <a href="#">FAQs</a>
      <a href="#">Carreira</a>
      <a href="#">Blog</a>
    </div>
    <a href="#">Termos de Serviço | Políticas de Privacidade</a>
    <span>Copyright © 2024 Braining - Todos os direitos reservados.</span>
  </footer>
`