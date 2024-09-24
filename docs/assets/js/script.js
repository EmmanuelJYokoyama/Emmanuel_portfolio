document.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.getElementById('nome-digitado');
  const texts = ["Olá visitante, eu sou Emmanuel Yokoyama", "Bem vindo ao meu portfólio!", "Apaixonado por Tecnologia e por novas invenções!  "];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {

      nameElement.innerHTML = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(typeWriter, 95);
    } else if (isDeleting && charIndex >= 0) {

      nameElement.innerHTML = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeWriter, 1000);
    }
  }

  typeWriter();
});


document.addEventListener('DOMContentLoaded', function() {
  const projectElement = document.querySelector('.projeto1');
  const projectElement2 = document.querySelector('.projeto2');
  const projectElement3 = document.querySelector('.projeto3');

  projectElement.addEventListener('click', function() {
      window.location.href = 'https://www.inicepg.univap.br/cd/INIC_2023/anais/arquivos/RE_0528_0429_01.pdf'; 

  });
  projectElement2.addEventListener('click', function() {
      window.location.href = 'https://github.com/Draco-Imperium/API_FATEC1'; 

  });
  projectElement3.addEventListener('click', function() {
      window.location.href = '#';
      window.alert("Projeto em desenvolvimento!") 

  });

});
