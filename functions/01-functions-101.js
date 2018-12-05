// Run $ node 01-functions-101.js to print to the terminal

let line = '--------------------'

// Function - input (argument(s)), code, output

let greetUser = function () {
    console.log('Welcome user!')
}

// We need to call the function to execute it.
greetUser()
greetUser()

console.log(line)

let square = function (number) {
    // console.log(number) // Test
    let result = number * number
    return result
}

let num = 3
square(num)
square(3)
square(10)

let value = square(num)
let valueTwo = square(10)

console.log(value)
console.log(valueTwo)

console.log(line)

// CHALLENGE 1

let convertFahrenheitToCelsius = function (temp) {
    let resultTemp = (temp - 32) * 5 / 9
    return resultTemp
}

let testOne = convertFahrenheitToCelsius(32)
let testTwo = convertFahrenheitToCelsius(68)

console.log('What is 32° Fahrenheight in Celsius ?')
console.log(testOne)
console.log('What is 68° Fahrenheight in Celsius ?')
console.log(testTwo)


