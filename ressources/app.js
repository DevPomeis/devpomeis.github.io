document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const easter = document.getElementById('easteregg');

easter.addEventListener("click", () => {alert("Tu as trouvé l'alerte secrete, felicitation.")})