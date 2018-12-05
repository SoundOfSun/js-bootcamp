// Run $ node 03-arguments.js to print to the terminal

let line = '--------------------'

// Multipe arguments
console.log('We will add two numbers. Result:')
let add = function (a, b) {
    return a + b
}

let result = add(10, 5)
console.log(result)
console.log(line)

// Default arguments
let  getScoreText = function (name = 'player', score = 0) {
    console.log(name)
    console.log(score)
    return 'Name: ' + name + ' - Score: ' + score
}

console.log('Our default values are player  - 0')
console.log(line)
console.log('Call the function with only  the  1st argument defined')
getScoreText('Andrew')
console.log(line)
console.log('Call the function with both arguments defined')
getScoreText('Lola', 100)
console.log(line)
let scoreText = getScoreText('Jane')
console.log(scoreText)
console.log(line)
let scoreTextTwo = getScoreText(undefined,  80)
console.log(scoreTextTwo)
console.log(line)

// CHALLENGE 2
console.log('CHALLENGE 2')

let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tipResult = getTip(25, undefined)
console.log(tipResult)
let tipResultTwo = getTip(50, .1)
console.log(tipResultTwo)