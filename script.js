// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // ajusta para o menu fixo
        behavior: 'smooth'
      });
    }
  });
});
