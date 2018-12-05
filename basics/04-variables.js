// Run $ node 04-variables.js to print to the terminal

let line = '--------------------'

let petName = 'Nala'

petName = 'Spot'

console.log('You cannot define a variable you already defined. But you can assign a new value:')
console.log(petName)
console.log(line)

//  Variable names cannot start with a number, only [a-z], $ or _
//  Variable names cannot de reserved keywords,  i.e "let"

// CHALLENGE 3 - Temperature Converter
let fahrenheit = 32
let celsius = (fahrenheit - 32) * 5 / 9
let kelvin = (fahrenheit + 459.67) * 5 / 9

let celsiusCon = 'The result in Celsius degrees is: '
let kelvinCon = 'The result in  Kelvin degrees is: '

console.log('Challenge 3 - Convert a Fahrenheit temperature in Celsius and Kelvin:')
console.log(celsiusCon)
console.log(celsius)
console.log(kelvinCon)
console.log(kelvin)