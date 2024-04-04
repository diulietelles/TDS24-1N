// Exercise 2

/* Ask the user to write a sentence and print in the console the
altered sentence with:
- All uppercase letters;
- In the language of "i" (replacing the vowel "o" with "i");
- The length of the sentence */

const readlineSync = require('readline-sync')
const sentence = readlineSync.question('Enter a sentence: ')

const uppercaseSentence = sentence.toUpperCase() // all uppercase letters
const iLanguageSentence = uppercaseSentence.replaceAll('O', 'I') // replacing 'O' with 'I'
const sentenceLength=uppercaseSentence.length // length of the sentence

// printing the sentence with the alterations:
console.log('Original sentence:', sentence)
console.log('Uppercase sentence:', uppercaseSentence)
console.log('Sentence in the language of "I":', iLanguageSentence)
console.log('Length of the sentence:', sentenceLength)
