const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  getLatinUpperCharIndex(l, firstUpperCode) {
    return l.toUpperCase().charCodeAt(0) - firstUpperCode;
  }
  calcCodeCipherSymbol(chr, keyChr, firstUpperCode, alphabetSize) {
    return (
      firstUpperCode +
      ((this.getLatinUpperCharIndex(chr, firstUpperCode) +
        this.getLatinUpperCharIndex(keyChr, firstUpperCode)) %
        alphabetSize)
    );
  }
  calcDecodeCipherSymbol(chr, keyChr, firstUpperCode, alphabetSize) {
    return (
      firstUpperCode +
      ((this.getLatinUpperCharIndex(chr, firstUpperCode) -
        this.getLatinUpperCharIndex(keyChr, firstUpperCode) +
        alphabetSize) %
        alphabetSize)
    );
  }
  isLatin(chr) {
    return chr.search(/[a-zA-Z]/) !== -1;
  }
  crypt(str, key, dir) {
    if (str === undefined || key === undefined) {
      throw Error("Error! Expected 2 params!");
    }
    const strArr = str.split("");
    const keyArr = key
      .repeat(Math.max(Math.abs(Math.ceil(str.length - key.length)), 1))
      .split("");
    const result = [];
    let keyIndex = 0;
    strArr.forEach((el, i) => {
      if (this.isLatin(el)) {
        const newSymbol =
          dir === "encrypt"
            ? this.calcCodeCipherSymbol(el, keyArr[keyIndex], 65, 26)
            : this.calcDecodeCipherSymbol(el, keyArr[keyIndex], 65, 26);
        result.push(String.fromCharCode(newSymbol));
        keyIndex++;
      } else {
        result.push(el);
      }
    });
    return this.isDirect ? result.join("") : result.reverse().join("");
  }
  encrypt(encodeStr, key) {
    return this.crypt(encodeStr, key, "encrypt");
  }
  decrypt(decodeStr, key) {
    return this.crypt(decodeStr, key, "decrypt");
  }
}

module.exports = VigenereCipheringMachine;
