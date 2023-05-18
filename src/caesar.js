// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// let lookup = "abcdefghij k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z"
//               0123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 26
const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");

  // make sure the shift value is no greater than 25 || less than -25 || === to 0
  function caesar(input = "", shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    let loweredInput = input.toLowerCase();

    let newMessage = "";
    if (encode) {
      // iterate through the input. Move the index of the input by the shift number
      for (let i = 0; i < loweredInput.length; i++) {
        const letter = loweredInput[i];
       // Find the index of the letter in the alphabetArray
        let letterIndex = alphabetArray.indexOf(letter);
        if (letterIndex > -1) {
          // Shift here
          let shiftedIndex = (letterIndex + shift) % 26;
          if (shiftedIndex < 0) {
            shiftedIndex += 26;
          }
          let newLetter = alphabetArray[shiftedIndex];
          newMessage += newLetter;
        } else {
          newMessage += letter;
        }
      }
    } else {
      for (let i = 0; i < loweredInput.length; i++) {
        const letter = loweredInput[i];
        let letterIndex = alphabetArray.indexOf(letter);
        if (letterIndex > -1) {
          // Shift here
          let shiftedIndex = (letterIndex - shift) % 26;
          if (shiftedIndex < 0) {
            shiftedIndex += 26;
          }
          let newLetter = alphabetArray[shiftedIndex];
          newMessage += newLetter;
        } else {
          newMessage += letter;
        }
      }
    }
    return newMessage;
  }
  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
