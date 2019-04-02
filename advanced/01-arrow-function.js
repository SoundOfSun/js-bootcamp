// Run $ node 01-arrow-function.js to print to the terminal

let line = '--------------------'

// Another syntax for a function - remove function keyword and add arrow rocket
const square = (num) => {
    return num * num
}

console.log(`What is the square number of 5? - using a normal block in {...}`)
console.log(square(5))
console.log(line)

// Short-end notation
const squareShort = (num) => num * num

console.log(`What is the square number of 5? - using short-end notation`)
console.log(squareShort(5))
console.log(line)

const people = [{
    name: 'Lola',
    age: 25,
},  {
    name: 'Pierre',
    age: 31,
}, {
    name: 'Dominique',
    age: 27,
}]

// current way I've learnt
const under30 = people.filter(function (person) {
    return person.age < 30
})

console.log(`List all people under 30 years old: - using a normal block in {...}`)
console.log(under30)
console.log(line)

// short-end notation
const  under30Short =  people.filter((person) => person.age < 30)

console.log(`List all people under 30 years old: - using short-end notation`)
console.log(under30Short)
console.log(line)

// TASK: Find and print the person with age 25
const isAge25 = people.find((person) => person.age === 25)

console.log(`Find person with age 25: - using short-end notation`)
console.log(isAge25.name)
console.log(line)