// Run $ node 02-arrow-function-2.js to print to the terminal

let line = '--------------------'

// regular function
const add = function (a, b) {
    // access arguments local variable
    // console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log('Add the first two numbers passed as arguments (11 and 22):')
console.log(add(11, 22, 33, 44))
console.log(line)

// arrow functions don't bind arguments and don't bind 'this'

const car = {
    colour: 'red',
    getSummary: function () {
        return `The car is ${this.colour}.`
    }
    // other way of writing it without the function keyword
    // getSummary() {
    //    return `The car is ${this.colour}.`
    //}
}

console.log(`Print the colour summary for the car object:`)
console.log(car.getSummary())
console.log(line)