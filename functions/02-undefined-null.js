// Run $ node 02-undefined-null.js to print to the terminal

let line = '--------------------'

// Undefined for variable
console.log('An example of a variable to which we assigned a value.')
let name = 'Jen'
console.log(name)
console.log(line)

let age // We don't assign a value
console.log(age)
// Will give an 'undefined' value
console.log(line)

console.log('Has age been defined ? What is the value ?')
if (age === undefined) {
    console.log('Please provide an age')
} else {
    console.log(age)
}
console.log(line)

// Undefined for function  arguments
console.log('Let\'s square a number !')
let square = function (num) {
    console.log(num)
}

square() // No value  to pass as argument, so 'undefined' will be assigned
console.log(line)

let add  = function (num) {
    console.log(num)
}

console.log('Let\'s see what THIS function returns !')
let  result = add()
console.log(result)
console.log(line)

// Null  as  assigned value
let postcode = 23904
// re-assign to null instead of undefined, to clear  the variable
postcode = null

console.log(postcode)