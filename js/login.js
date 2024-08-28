
const storedUser = 'Daniellamnza';
const storedPassword = 'DanPPP2003';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    if (email === storedUser && password === storedPassword) {
        window.location.href = './Productos.html';
    } else {
        alert('El usuario o la contraseña es incorrecta');
    }
});
