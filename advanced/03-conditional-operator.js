// Run $ node 03-operational-operator.js to print to the terminal

let line = '--------------------'

const userAge = 30

// Current way
// let message // --> will change according to the condition
//
// if (userAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote.'
// }

// Using a conditional operator
// We can use const since the value is already  containing the condition
const message = userAge >= 18 ? `You can vote!` : `You cannot vote.`

console.log(`Your age is 30:`)
console.log(message)
console.log(line)

console.log(`You can only access MrCocktail website if you are an adulte.`)
console.log(`User - select age 30`)

const showPage = () => {
    console.log(`Showing the page`)
}
const showErrorPage = () => {
    console.log(`Showing the error page`)
}

userAge >= 21 ? showPage() : showErrorPage()
console.log(line)

console.log(`Teacher: "please for teams of 3 or 4 people."`)

console.log(`Team 1: Tyler, Porter, Paul`)
const team = ['Tyler', 'Porter', 'Paul']
const teamStatus = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(teamStatus)

console.log(`Team 2: Jessica, Mark, Josh, Leila, Henry`)
const teamTwo = ['Jessica', 'Mark', 'Josh', 'Leila', 'Henry']
const teamTwoStatus = teamTwo.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(teamTwoStatus)
console.log(line)