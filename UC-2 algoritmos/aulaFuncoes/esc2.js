//Exercícios de escrita de código 2 **

//a) Function to calculate the sum of two numbers:
function sum(number1, number2) {
    const result = number1 + number2
    return result
}

// Function call and printing the result to the console
console.log("Sum result:", sum(5, 3))

//b) Function to check if the first number is greater than or equal to the second:
function greaterOrEqual(number1, number2) {
    return number1 >= number2
}

// Function call and printing the result to the console
console.log("Is the first number greater than/equal to the second?", greaterOrEqual(8, 4))

//c) Function to check if a number is even:
function isEven(number) {
    return number % 2 === 0
}

// Function call and printing the result to the console
console.log("Is the number even?", isEven(7))


//d) Function to print the length of a message and its uppercase version:
function printMessageDetails(message) {
    const length = message.length
    const upperCaseMessage = message.toUpperCase()
    console.log("Message length:", length)
    console.log("Uppercase version of the message:", upperCaseMessage)
}

// Function call
printMessageDetails("Hello, world!")