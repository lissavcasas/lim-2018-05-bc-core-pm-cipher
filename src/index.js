//Llamando a los elmentos del HTML que se van a manipular
const messageInput = document.getElementById('message'); // almacenar el mensaje ingresado
const buttonCipher = document.getElementById('buttonCode'); // almacenar el bottón que permite cifrar
const keyInput = document.getElementById('offSet'); // almacenar la cantidad que se ingresa para el desplazamiento

//Llamando a la función cifrar
buttonCipher.addEventListener('click', cipher); //Al escuchar el click del botón, ejecuta la función cifrar