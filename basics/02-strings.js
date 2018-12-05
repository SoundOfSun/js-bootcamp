// Run $ node 02-strings.js to print to the terminal

// variable
let line = '--------------------'
let name = 'Cécile A.'

// printing to the console
console.log('Printin to the console:')
console.log(name);
console.log(line)

// other variables to concatenate
let firstName = 'Cécile'
let lastName = 'A.'
let fullName = firstName + ' ' + lastName

let space = ' '
let fullNameTwo = firstName + space + lastName

// print concatenation to the console
console.log('Printing examples of concatenation:')
console.log(fullName);
console.log(fullNameTwo);
console.log(line)

// CHALLENGE 1
let city = 'London'
let country = 'United Kingdom'
let comma = ','

let location = city + comma + space + country
let locationTwo = city + ', ' + country

console.log('Challenge 1 - Concatenate your city  and country:')
console.log(location)
console.log(locationTwo)