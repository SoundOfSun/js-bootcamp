// Run $ node 06-boolean-advanced.js to print to the terminal

let line = '--------------------'

let isAccountLocked = true

console.log('ACCOUNT STATUS:')

if (isAccountLocked) {
    console.log('The account is now locked.')
} else {
    console.log('Welcome !')
}
console.log(line)

let isAccountLockedTwo = false
let userRole = 'admin'

console.log('ACCOUNT STATUS:')

if (isAccountLockedTwo) {
    console.log('The account is now locked.')
} else if (userRole === 'admin') {
    console.log('Welcome Admin !')
} else {
    console.log('Welcome !')
}
console.log(line)

//  CHALLENGE 5

let temp = 25

console.log('- How is the weather today ?')

if (temp <= 10) {
    console.log('- It is freezing outside !')
} else if (temp >=30) {
    console.log('- It is hot outside !')
} else {
    console.log('- Go for it. It is pretty nice =)')
}
console.log(line)