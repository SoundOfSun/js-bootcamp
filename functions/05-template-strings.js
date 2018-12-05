// Run $ node 05-template-strings.js to print to the terminal

let line = '--------------------'

// Regular strings can be surrounded by "" or ''
// Template string use back ticks `` and you can declare variables inside with ${} instead of concatenation
let name = 'Jen'
let age = 12

console.log(`What's your name and how old are you?`)
console.log(`Hey, my  name is ${name}! I am ${age} years old.`)
console.log(line)

let getPresentation = function (name= 'Anonymous', age = 1) {
    return `Name: ${name}, Age: ${age}`
}

let exampleOne = getPresentation(undefined, 30)
console.log(exampleOne)
console.log(line)

// CHALLENGE THREE
console.log(`Challenge 3 :`)

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}.`
}

let tipResult = getTip(40, .25)
console.log(tipResult)