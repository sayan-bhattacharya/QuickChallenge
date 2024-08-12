// pigLatin.js

function translateToPigLatin(word) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
word = word.toLowerCase();

if (vowels.includes(word[0])) {
    return word + 'way';
} else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
    return word.slice(2) + word.slice(0, 2) + 'ay';
} else {
    return word.slice(1) + word[0] + 'ay';
}
}

function translatePhraseToPigLatin(phrase) {
    return phrase.split(' ').map(translateToPigLatin).join(' ');
}

const inputPhrase = process.argv.slice(2).join(' ');
const translatedPhrase = translatePhraseToPigLatin(inputPhrase);

console.log(translatedPhrase);