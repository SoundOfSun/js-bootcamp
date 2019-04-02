// Run $ node 04-try-catch.js to print to the terminal

let line = '--------------------'

const getTip = (amount) => amount * .25

const result = getTip(true)
console.log(result)
// --> 0.25
console.log(line)

const getTipTwo = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        // throw an error to crash the programm
        // throw 'Argument must be a number.'
        // By using Error, we'll get more information on the terminal, i.e in which file & at which line we crashed the programm
        throw Error('Argument must be a number.')
    }
}

// const resultTwo = getTipTwo(true)
// console.log(resultTwo)
// .../js-bootcamp/advanced/06-try-catch.js:16
// throw 'Argument must be a number.'
// ^

// Boilerplate try - catch statement, to recover from an  error :

try {
    const resultTwo = getTipTwo(true)
    console.log(resultTwo)
} catch (e) {
    console.log('catch block is running')
}
// --> catch block is running - we avoided the programm crashing
// "Just because one part of the programm throws down an error doesn't mean you  want the whole thing to shut down"

try {
    const resultTwo = getTipTwo(10)
    console.log(resultTwo)
} catch (e) {
    console.log('catch block is running')
}