//Llamando a los elmentos del HTML que se van a manipular
const myString = document.getElementById('my_string'); // almacenar el mensaje ingresado
const offset = document.getElementById('key_number'); // almacenar la cantidad que se ingresa para el desplazamiento
const buttonDecode = document.getElementById('button_decoder'); // almacenar el bottón que permite cifrar
const buttonEncode = document.getElementById('button_encoder'); // almacenar el bottón que permite descifrar

//Llamando a la función cifrar buttonDecode.addEventListener('click', decode); 
//Agregando evento: Botón codificar
const startDecode = () => { 
    let result = cipher.decode(offset,myString);
    document.getElementById('my_result').innerHTML = result; // Pedir el ID donde se imprimirá el mensaje cifrado
}
buttonDecode.addEventListener('click', startDecode); //Al escuchar el click del botón, ejecutar la función cifrar

//Agregando evento: Botón decodificar
const startEncode = () => { 
    let result = cipher.encode(offset,myString);
    document.getElementById('my_result').innerHTML = result; // Pedir el ID donde se imprimirá el mensaje descifrado
}
buttonEncode.addEventListener('click', startEncode); //Al escuchar el click del botón, ejecutar la función descifrar