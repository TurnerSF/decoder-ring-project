const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // set the decode key
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  // set the encode key
  const encodeKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  //made two different functions for encoding and decoding
  function encoder(input) {
    let endMessage = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        // maintains spaces
        endMessage += input[i];
      } else {
        const x = input[i].toLowerCase(); //ignores capital letters
        endMessage += encodeKey[x];
      }
    }
    return endMessage;
  }
  function decoder(input) {
    if (input.replace(/\s/g, "").length % 2 !== 0) return false;
    let endMessage = "";
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        endMessage += input[i];
        i = i - 1;
      } else {
        const x = input[i];
        const y = input[i + 1];
        const letterPos = `${x}${y}`;
        endMessage += decodeKey[letterPos];
      }
    }
    return endMessage;
  }
  function polybius(input, encode = true) {
    // If encode is false return the decoder function
    if (!encode) {
      return decoder(input);
     // else return the encoder function 
    } else {
      return encoder(input);
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
