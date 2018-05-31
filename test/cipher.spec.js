describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      let result = cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      assert.equal(result, "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result = cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result = cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });
  cons 
  //else if(asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII//
  //for(let i = 0; i < string.length; i++) {


  describe('cipher.createCipherWithOffset', () => {

    xit('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

});
