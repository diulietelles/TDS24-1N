// Download the readline-sync library
// npm install readline-sync

// Create a variable that references the library
const readlineSync = require('readline-sync')

// Asking questions and storing the answers
const name = readlineSync.question("What is your name? ")
const age = readlineSync.question("How old are you? ")
const city = readlineSync.question("What is your city? ")

// Displaying the answers
console.log("Name: " + name)
console.log("Age: " + age)
console.log("City: " + city)



