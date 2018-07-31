describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
<<<<<<< HEAD
      let result = cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
=======
      let result = cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
>>>>>>> 026eb5bde7e447a2d8aa43d15e63cb399923a120
      assert.equal(result, "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
<<<<<<< HEAD
      let result= cipher.encode(33,"abcdefghijklmnopqrstuvwxyz");
=======
      let result = cipher.encode(33, "abcdefghijklmnopqrstuvwxyz");
>>>>>>> 026eb5bde7e447a2d8aa43d15e63cb399923a120
      assert.equal(result, "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "0123456789;.-_¿?¡!=+´" para "0123456789;.-_¿?¡!=+´" con offest 33', () => {
<<<<<<< HEAD
      let result= cipher.encode(33,"0123456789;.-_¿?¡!=+´");
=======
      let result = cipher.encode(33, "0123456789;.-_¿?¡!=+´");
>>>>>>> 026eb5bde7e447a2d8aa43d15e63cb399923a120
      assert.equal(result, "0123456789;.-_¿?¡!=+´");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
<<<<<<< HEAD
      let result = cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG");
=======
      let result = cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG");
>>>>>>> 026eb5bde7e447a2d8aa43d15e63cb399923a120
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
<<<<<<< HEAD
        let result= cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg");
        assert.equal(result, "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789;.-_¿?¡!=+´" para "0123456789;.-_¿?¡!=+´" con offest 33', () => {
      let result= cipher.decode(33,"0123456789;.-_¿?¡!=+´");
      assert.equal(result, "0123456789;.-_¿?¡!=+´");
    });
  });
  });
  
=======
      let result = cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg");
      assert.equal(result, "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789;.-_¿?¡!=+´" para "0123456789;.-_¿?¡!=+´" con offest 33', () => {
      let result = cipher.decode(33, "0123456789;.-_¿?¡!=+´");
      assert.equal(result, "0123456789;.-_¿?¡!=+´");
    });
  });
});

>>>>>>> 026eb5bde7e447a2d8aa43d15e63cb399923a120
  //describe('cipher.createCipherWithOffset', () => {
    //it('debería ser una función', () => {
      //assert.equal(typeof cipher.createCipherWithOffset, 'function');
    //('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');
    //});
  //});