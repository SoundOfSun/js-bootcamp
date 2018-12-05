// Run $ node 04-function-scope.js to print to the terminal

let line = '--------------------'

// SCOPE TREE

// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log('What is 32° Fahrenheight in Celsius ?')
console.log(tempOne)
console.log('What is 68° Fahrenheight in Celsius ?')
console.log(tempTwo)
console.log(line)