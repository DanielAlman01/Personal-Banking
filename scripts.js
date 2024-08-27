document.getElementById('form-log').addEventListener('submit', function(event) {
    event.preventDefault();

      const errorMessage = document.getElementById('error message');
      errorMessage.textContent = 'Usuario o contraseña incorrectos';
      errorMessage.style.display = 'block';
    
})