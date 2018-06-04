//Llamando a los elmentos del HTML que se van a manipular
const myString = document.getElementById("my_string"); // almacenar el mensaje ingresado
const myOffset = document.getElementById("key_number"); // almacenar la cantidad que se ingresa para el desplazamiento
const buttonEncode = document.getElementById("button_encoder"); // almacenar el bottón que permite cifrar
const buttonDecode = document.getElementById("button_decoder"); // almacenar el bottón que permite descifrar
const result = document.getElementById("my_result"); // almacenar el mensaje resultado
const buttonStart = document.getElementById("button_start"); // almacenar el bottón que permite descifrar

//Agregando evento: Botón iniciar
buttonStart.addEventListener("click", () => { //Al escuchar el click del botón, ejecutar la función botón
document.getElementById("hidden").style.display = "block";
document.getElementById("home").style.display = "none";
}); 

//Agregando evento: Botón cifrar
const encode = () => { 
  result.value = window.cipher.encode(myOffset.value,myString.value);
}
buttonEncode.addEventListener("click", encode); //Al escuchar el click del botón, ejecutar la función cifrar

//Agregando evento: Botón descifrar
const decode = () => { 
  result.value = window.cipher.decode(myOffset.value,myString.value);
}
buttonDecode.addEventListener("click", decode); //Al escuchar el click del botón, ejecutar la función descifrar

