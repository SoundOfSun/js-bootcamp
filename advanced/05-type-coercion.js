// Run $ node 04-type-coercion.js to print to the terminal

let line = '--------------------'

// Type Coercion - a string, a  number, a boolean

console.log('5' + 5)
console.log(line)
// --> 55 (printing string 5 then integer 5, operate in the context of the string)

console.log('5' - 5)
console.log(line)
// --> 0 (operate in the context of the number!)

console.log(5 === 5)
console.log(line)
// --> true (takes the type into account)

console.log('5' == 5) // --> double equal sign this time
console.log(line)
// --> true (does not take into account the type)

const type = typeof 123
console.log(type)
// --> check the type of something, returns  a string which tells us the type
// --> give the type of anything, string, variable, function etc.
console.log(line)

const value = true + 12
const thisType = typeof value
console.log(thisType)
// --> considers true to be 1
console.log(value)
// --> adds 1 to 12 = 13
console.log(line)