// Run $ node 02-objects-functions.js to print to the terminal

let line = '--------------------'

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let yourBook = {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    pageCount: 738
}

let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}.`)
}

console.log(`Library:`)

getSummary(myBook)
getSummary(yourBook)

console.log(line)

let getSummaryTwo = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        padeCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummaryTwo(myBook)
let otherBookSummary = getSummaryTwo(yourBook)

console.log(bookSummary.padeCountSummary)
console.log(line)

// CHALLENGE 2
console.log(`Challenge 2:`)
console.log(`Return temperature in Celsius and Kelvin.`)

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = convertFahrenheit(74)
console.log(`${temps.fahrenheit}° Fahrenheit equals to ${temps.celsius}° Celsius and ${temps.kelvin}° Kelvin.`)
console.log(line)
