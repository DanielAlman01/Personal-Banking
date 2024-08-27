document.getElementById('form-log').addEventListener('submit', function(event) {
  event.preventDefault  
  const correctemail = 'Usuariocorrecto';
  const passwordemail = 'Passwordcorrecta';

  const enteredemail = document.getElementById('emailLogin').value;
  const enteredpassword = document.getElementById('passwordLogin').value;

  if(enteredemail == correctemail && passwordemail == enteredpassword){
    alert('Inicio de sesion exitoso');

  }
  else{
    const errorMessage = document.getElementById('error message');
    errorMessage.textContent = 'Usuario o contraseña incorrectos';
    errorMessage.style.display = 'block';
  }
})