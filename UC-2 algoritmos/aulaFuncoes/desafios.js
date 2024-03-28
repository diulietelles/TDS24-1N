// Desafio 1**

//a) Arrow function that receives a parameter and prints it to the console:

const printParameter = parameter => {
    console.log(parameter)
}
// Example usage
printParameter("Hello, world!")


//b) Arrow function that receives two values as parameters and performs their sum. Then, it calls the first function to print this sum:
const sumAndPrint = (value1, value2) => {
    const sumResult = value1 + value2
    printParameter(sumResult)
}

// Example usage
sumAndPrint(5, 3)

//Desafio 2 **

// Function to calculate the square of the hypotenuse using Pythagoras' theorem
function calculateHypotenuseSquared(legA, legB) {
    // Calculate the square of the hypotenuse
    const hypotenuseSquared = (legA * legA) + (legB * legB)
    // Return the square of the hypotenuse
    return hypotenuseSquared
}

// Example usage of the function
const leg1 = 3
const leg2 = 4
const resultHypotenuseSquared = calculateHypotenuseSquared(leg1, leg2)

// Print the result to the console
console.log("The square of the hypotenuse value is:", resultHypotenuseSquared)

