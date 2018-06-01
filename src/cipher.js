//OBJETO GLOBAL WINDOW
window.cipher = {
  ///METODO CIFRAR: Declarando función para cifrar una cadena de texto
  encode: (offset,string) => {
    let key = parseInt(offset);
    let space = "";
    let myResult = ""; 

    for(let i = 0; i < string.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = string.charCodeAt(i); //convertir el string del usuario en un caracter ASCII
      if(asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        space = (asciiCharacter - 65 + key) %26 + 65; //obtener el número de la letra en el codigo ASCII
      } else if(asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        space = (asciiCharacter - 97 + key) %26 + 97;
      } else {
        space = asciiCharacter;
      } myResult += String.fromCharCode(space);
    } 
    return myResult; // retornar el resultado del mensaje del usuario
  },

  ///METODO DESCIFRAR: Declarando función para descifrar una cadena de texto
  decode: (offset,string) => {
    let key = parseInt(offset);
    let space = "";
    let myResult = ""; 

    for(let i = 0; i < string.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = string.charCodeAt(i); //convertir el string del usuario en un caracter ASCII
      if(asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        space = (asciiCharacter - 65 - key + 26*2) %26 + 65; //obtener el número de la letra en el codigo ASCII
      } else if(asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        space = (asciiCharacter - 97 - key + 26*2) %26 + 97;
      } else {
        space = asciiCharacter
      } myResult += String.fromCharCode(space);
    } 
    return myResult; // retornar el resultado del mensaje del usuario
  }
//createCipherWithOffset: () => {}
};
