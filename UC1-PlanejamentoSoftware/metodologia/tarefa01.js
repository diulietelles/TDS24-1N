// Exercise 3
const readlineSync = require('readline-sync')
// Create an array with at least 5 dog breeds
let dogBreeds = ['American Foxhound', 'French Bulldog', 'Golden Retriever', 'Beagle', 'Pinscher']
let weight1 = 25
let weight2 = 30

// Ask the user to enter a number from 0 to 4
const chosenNumber = readlineSync.question('Enter a number from 0 to 4: ')
// Print in the console the breed corresponding to the position chosen by the user
if (chosenNumber >= 0 && chosenNumber <= 4) {
    console.log('The corresponding dog breed is: ' + dogBreeds[chosenNumber])
} else {
    console.log('Invalid number. Please enter a number from 0 to 4')
}

// weight:
if(weight1> 25 && weight1< 30 || (weight2 == 30)){
    console.log('true')
}else {
    console.log('false')
}

//sex of dog

const chosenOfDog = readlineSync.question('Enter a number from F OR M: ')

if(chosenOfDog === 'f'){
    console.log('Famale')
} else{
    console.log('Male')
}

const dermatite = readlineSync.question('Entre sim ou não')
if(dermatite === sim) {

}
// alergia
const readlineSync = require('readline-sync')
const alergia = readlineSync.question('Entre com nao ou sim :')

if(alergia === 'sim'){
    console.log('Seu cão não é alérgico!')
} else{
    console.log('false')
    }