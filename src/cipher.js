//window.cipher = {
  // ... 
//};

//Declarando función para cifrar una cadena de texto
const cipher = () => {
  // parsear para verificar que sea un valor numérico 
  const offSet = parseInt(keyInput.value); 
  // almacenar el valor del mensaje ingresado
  const asciiNumber = messageInput.value; 
  // almacenar el valor del string Cifrado
  var myStringCipher = ""; 

  for(let i = 0; i < asciiNumber.length; i++){  // recorrer el string del usuario
      var numberOfTheLetter = (asciiNumber.charCodeAt(i)-65+offSet)%26+65; //obtener el número de la letra en el codigo ASCII
      myStringCipher += String.fromCharCode(numberOfTheLetter);  // convertir codigo ASCII en una letra
  } 
  document.getElementById("myStringCipher").innerHTML=myStringCipher; // Pedir el ID donde se imprimirá el mensaje cifrado
}
 
//Declarando función para descifrar una cadena de texto
