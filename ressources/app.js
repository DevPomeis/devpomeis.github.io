document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const easter = document.getElementById('easteregg');

easter.addEventListener("click", () => {alert("Tu as trouvé l'alerte secrete!\n Cet easter-egg est là pour remercier LuLu, vas sur son repo et essaie son jeu PYRAMIDE \n il en est fier https://github.com/luca-montaigut/PYRAMID")})
