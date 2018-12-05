// Run $ node 01-objects-101.js to print to the terminal

let line = '--------------------'

// First object - characteristics are defined in property - value pairs
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`First book:`)
console.log(myBook)
// printing only one property
console.log(myBook.title)
console.log(`${myBook.title} by ${myBook.author}`)
console.log(line)

// change the title of the book
myBook.title = 'Animal Farm'

console.log(`Second book:`)
console.log(`${myBook.title} by ${myBook.author}`)
console.log(line)

// CHALLENGE 1
console.log(`Challenge 1:`)
console.log(`Create a person object.`)

let person = {
    name: 'Cecile',
    age: 26,
    location: 'London'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`One year later, ${person.name} is ${person.age} and lives in ${person.location}.`)
console.log(line)

