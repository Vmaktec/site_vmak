const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');  // Toggle para mostrar/ocultar o menu
});