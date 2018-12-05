// Run $ node 07-const.js to print to the terminal

let line = '--------------------'

console.log(`The initial value for isRaining is true. We reassign to false:`)

let isRaining = true
isRaining = false
console.log(isRaining)
console.log(line)

// const variables cannot be re-assigned

console.log(`Example of a constant variable`)

const isSunny = true
console.log(isSunny)
console.log(line)