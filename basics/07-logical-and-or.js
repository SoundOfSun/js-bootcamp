// Run $ node 07-logical-and-or.js to print to the terminal

let line = '--------------------'

// Logical AND operator && - True if both  sides are true. False otherwise.
console.log('What is the weather like today ?')
let temp = 22
if (temp >= 20 && temp <= 28) {
    console.log('It is pretty nice out.')
}

// Logical OR operator || - True if at least one side is true. False otherwise.
let tempTwo = -10
if (tempTwo <= 0 || tempTwo >= 40) {
    console.log('Do not go outside.')
}

console.log(line)

console.log('It is 15°C today. Should I go out ?')
let tempThree = 15
if (tempThree >= 20 && tempThree <= 28) {
    console.log('It is pretty nice out.')
} else if (tempThree <= 0 || tempThree >= 40) {
    console.log('Do not go outside.')
} else {
    console.log('Eh. Do what you want.')
}
console.log(line)

//  CHALLENGE 6

let isGuestOneVegan = true
let isGuestTwoVegan = false

console.log('Could we take a look at the menu, please ?')
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here is the vegan menu.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here is the  standard menu. You  will also find vegan options.')
} else {
    console.log('Here is the standard menu. Check out the meat !')
}
console.log(line)