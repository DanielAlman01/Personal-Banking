const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function cerrarSesion() {
    // Aquí iría la lógica real de cierre de sesión
    alert('Sesión cerrada. Redirigiendo al inicio...');
    window.location.href = 'index.html';
}
