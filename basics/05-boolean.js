// Run $ node 05-boolean.js to print to the terminal

let line = '--------------------'

// Booleans hold true or false and can be used to fire something on a condition
let temp = 31
let isFreezing = temp === 31

console.log('Is it freezing today ?')
console.log(isFreezing)
console.log(line)

// === - equality operator
// !== - not equal operator

// For numbers :
// < - less than operator
// > - greater than operator
// <= - less than or equal to
// >= - greater than or equal  to

let tempTwo = 31
let isFreezingTwo = tempTwo <= 32

console.log('What about now, is it freezing ?')
console.log(isFreezingTwo)
console.log(line)

if (isFreezingTwo)  {
    console.log('It is freezing outside !')
}
if (temp >= 110) {
    console.log('It is way too hot outside !')
}
console.log(line)

//  CHALLENGE 4

let myAge = 26
let isChild = myAge <= 7
let isSenior = myAge >= 65

console.log('I am 26, am I a child ?')
console.log(isChild)
console.log('And am I an old person ?')
console.log(isSenior)
console.log(line)

let yourAge = 68

if (yourAge <=7) {
    console.log('You are eligible for the child discount. Price is £8.')
}
if (yourAge >=65) {
    console.log('You are eligible for the senior discount. Price is £9.')
}
console.log(line)