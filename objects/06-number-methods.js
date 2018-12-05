// Run $ node 06-number-methods.js to print to the terminal

let line = '--------------------'

let num = 103.941

console.log(`Let's make 103.941 look more like a currency value:`)
console.log(num.toFixed(2))
console.log(line)

// Math has a lot of methods, just need to use our number as argument

console.log(`Now let's round the number 103.941`)
console.log(Math.round(num)) // usual rounding
console.log(Math.floor(num))  // round down
console.log(Math.ceil(num)) // round up
console.log(line)

// By default, random gives a number between 0 and .999

console.log(`Let's generate a random number:`)

let  randomNum = Math.random()
console.log(randomNum)
console.log(line)

// By default, random gives a number between 10 and 20

console.log(`Let's generate a random WHOLE number between 10 and 20:`)

let min = 10
let max = 20

let  randomNumTwo = Math.floor(Math.random() * (max - min +  1)) + min
// Math.random() * (max - min) --> 0 ~ 9.999
// Math.random() * (max - min +  1) --> 0  ~ 10.999
// Math.floor(Math.random() * (max - min +  1)) --> 0  ~ 10
// Math.floor(Math.random() * (max - min +  1)) + min --> 10  ~ 20

console.log(randomNumTwo)
console.log(line)

// CHALLENGE 4

console.log(`Challenge 4:`)
console.log(`Take someone's guess between 1 and 5`)

let makeGuess =  function (guess) {
    // generate the random number to match against the guess
    let min = 1
    let max = 5

    let  randomNumThree = Math.floor(Math.random() * (max - min +  1)) + min

    console.log(`The random number generated is ${randomNumThree}`)

    return guess === randomNumThree
}

console.log(`Our guess is 1. Does it match ?`)
console.log(makeGuess(1))