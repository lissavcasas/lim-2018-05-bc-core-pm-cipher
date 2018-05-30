///METODO CIFRAR  
window.cipher = {
  //Declarando función para descifrar una cadena de texto
  decode: (key,string) => {
    //parsear para verificar que sea un valor numérico 
    const offsetUser = parseInt(key.value); 
    // almacenar el valor del mensaje ingresado
    const stringUser = string.value; 
    // almacenar el valor del string Cifrado
    let myResult = ''; 

    for(let i = 0; i < stringUser.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = stringUser.charCodeAt(i); //convertir el string del usuario en un caracter ASCII
      let decodeValue;
      if(asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        decodeValue = (asciiCharacter - 65 + offsetUser) %26 + 65; //obtener el número de la letra en el codigo ASCII
      } else if(asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        decodeValue = (asciiCharacter - 97 + offsetUser) %26 + 97;
      } else {
        decodeValue= asciiCharacter;
      } 
        myResult += String.fromCharCode(decodeValue);
    } 
    return myResult;
  },
  ///METODO CIFRAR 
  encode: (key,string) => {
    // parsear para verificar que sea un valor numérico 
    const offsetUser = parseInt(key.value); 
    // almacenar el valor del mensaje ingresado
    const stringUser = string.value; 
    // almacenar el valor del string Cifrado
    let myResult = ''; 

    for(let i = 0; i < stringUser.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = stringUser.charCodeAt(i); //convertir el string del usuario en un caracter ASCII
      let encodeValue;
      if(asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        encodeValue = (asciiCharacter - 65 - offsetUser + 26) %26 + 65; //obtener el número de la letra en el codigo ASCII
      } else if(asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        encodeValue = (asciiCharacter - 97 - offsetUser + 26) %26 + 97;
      } else {
        encodeValue= asciiCharacter;
      } 
        myResult += String.fromCharCode(encodeValue);
    } 
    return myResult;
  },
//createCipherWithOffset: () => {
};