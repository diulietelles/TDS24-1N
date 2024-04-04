// Exercise 3
const readlineSync = require('readline-sync')
// Create an array with at least 5 dog breeds
const dogBreeds = ['American Foxhound', 'French Bulldog', 'Golden Retriever', 'Beagle', 'Pinscher']
// Ask the user to enter a number from 0 to 4
const chosenNumber = readlineSync.question('Enter a number from 0 to 4: ')
// Print in the console the breed corresponding to the position chosen by the user
if (chosenNumber >= 0 && chosenNumber <= 4) {
    console.log('The corresponding dog breed is: ' + dogBreeds[chosenNumber])
} else {
    console.log('Invalid number. Please enter a number from 0 to 4')
}



// the correct way from the teacher
const dogBreed = ['American Foxhound', 'French Bulldog', 'Golden Retriever', 'Beagle', 'Pinscher']
const chosenIndex = 4
console.log('Chosen breed:', dogBreed[chosenIndex])
