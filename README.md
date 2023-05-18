# decoder-ring-project

// explaining the caesar function: The function Caesar cipher is a way to encrypt a string. It encrypts a string by shifting the letters of the input by their place in the alphabet by a certain number of positions. This function takes 3 parameters

Parameter types and what they are needed for:

-The input should be a string. It is the string that will be encoded or decoded. It will only encode or decode alphabetical letters, if the input doesn't have alphabetical letters they will be kept the same.

-shift should be a number. it will be the number of positions the letters in the input shift. It should be any number between -25 and 25 excluding 0. Positive numbers make it move to the right, while negative numbers make it move to the left.

-encode is a boolean. It decides whether to encode the input message if true or decode the input message if false.

Example:

const secretMessage = caesar("Thinkful", 3, true);

console.log(secretMessage); // Output = "wklqnixo"

// explaining the polybius function: This function polybius cipher is another way to encrypt a string. It replaces each letter of the input with a two numbers. The polybius function takes two parameters

Parameter types and what they are needed for:

-The input should be a string. it is the string that will be encoded or decoded.

-encode is a boolean. it decides whether to encode the input if true or decode the input if it is false.

Example: const secretMessage = polybius("thinkful", true); console.log(secretMessage) // output = "4432423352125413"

// explaining the Substitution function: The function substitution cipher is a way to encrypt a string by taking each letter then switching it with another letter. The substitution function takes three parameters.

Parameter types and what they are needed for:

-input should be a string. It is the message that will be encoded or decoded.

-alphabet should be also be a string. It is the substitution alphabet used for encryption or decryption. It should have exactly 26 unique lowercase letters.

-encode is a boolean. it decides whether to encode the input if it is true or to decode the input message if false.

Example:

const secretMessage = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", true);

console.log(secretMessage) // output = "jrufscpw"
