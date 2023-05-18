// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // Check if the alphabet is provided and has a length of 26
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    // Iterate over each character in the alphabet Check if any character is repeated
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    let substituted = "";
    input = input.toLowerCase();

    // Iterate over each character in the input
    for (let i = 0; i < input.length; i++) {
      let char = input[i];

      // If the character is a space add a space to the substituted string
      if (char === " ") {
        substituted += " ";
        continue;
      }

      let foundIndex;
      if (encode) {
        foundIndex = trueAlphabet.indexOf(char);
        substituted += alphabet[foundIndex];
      } else {
        foundIndex = alphabet.indexOf(char);
        substituted += trueAlphabet[foundIndex];
      }
    }

    return substituted;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
