// JavaScript para alternar a classe 'active' no menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Abre/Fecha o menu ao clicar no ícone de hambúrguer
hamburger.addEventListener('click', (event) => {
  menu.classList.toggle('active');
  event.stopPropagation(); // Impede que o clique no hambúrguer feche o menu
});

// Fecha o menu quando o usuário clicar fora do menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('active');
  }
});