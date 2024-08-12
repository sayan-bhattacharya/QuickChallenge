// caesarCipher.js

function caesarCipher(str, shift) {
// Normalize the shift to be within the range of 0-25
shift = shift % 26;
if (shift < 0) {
    shift += 26;
}

// Convert the string to lowercase to make it case insensitive
str = str.toLowerCase();

let result = '';

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is a letter
    if (char >= 'a' && char <= 'z') {
        // Calculate the new character code
        let newCharCode = char.charCodeAt(0) + shift;

        // Wrap around if the new character code goes past 'z'
        if (newCharCode > 'z'.charCodeAt(0)) {
            newCharCode -= 26;
        }

        // Append the new character to the result
        result += String.fromCharCode(newCharCode);
    } else {
        // If it's not a letter, just append the original character
        result += char;
    }
}

return result;
}

// Get the inputs from process.argv
const args = process.argv.slice(2);
const phrase = args[0];
const shift = parseInt(args[1], 10);

// Encrypt the phrase and output the result
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);