// Run $ node 07-closures.js to print to the terminal

let line = '--------------------'

// 1. Define a function
// const myFunction = () => {
//     // The function creates a variable...
//     const message = 'This is my message'
//     // ...  creates another function...
//     const printMessage = () => {
//         // The function here just prints the variable above's value
//         console.log(message)
//     }
//     // ... and then calls that function
//     printMessage()
// }

// 2. Call the function
// myFunction()

// 1. Define a function
const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    // let's return the result of the printMessage function instead
    return printMessage
}

// 2. Store the result of myFunction
const myPrintMessage = myFunction()
// 3. Print the result of myFunction
myPrintMessage()

//  --> A closure is a combination of a function with the lexical scope in which it was defined
//  in this case, when printMessage()  was defined, it had access to message (the variable)

console.log(line)

// More closures practice

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count --
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
// Will return the object, the object is a bunch of functions that are closures
//  --> only  modifyable by a set of very specific way, by 1

counter.increment() // 1
counter.decrement() // 0
counter.decrement() // -1

console.log(counter.get())

console.log(line)

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

// querying - transforming a function with multiple arguments to a function with a subset or arguments

const add10 = createAdder(10)
console.log(add10(-2)) // 8
console.log(add10(20)) // 30

const add100 = createAdder(100)
console.log(add100(-90)) // 10

console.log(line)

// CHALLENGE FOUR

const createTipper = (baseTipPercent) => {
    return (amount) => {
        return baseTipPercent * amount
    }
}

const tip15Percent = createTipper(0.15)
console.log(tip15Percent(30))

console.log(line)