// Run $ node 08-var.js to print to the terminal

let line = '--------------------'

console.log(`var is the old way of declaring a variable.`)
console.log(`Like let, you can re-assign the value to something else:`)

var firstName = 'Alice'
firstName = 'Leon'

console.log(firstName)
console.log(line)

console.log(`We can also re-declare the variable:`)

var firstName = 'Jane'

console.log(firstName)
console.log(line)

console.log(`If blocks don't actually create a new scope when working with var:`)
console.log(`var only has function-based scope.`)

if (10 === 10) {
    var firstName  = 'Allen'
}

console.log(firstName)
console.log(line)

let age
console.log(age)

var city
console.log(city)

// When trying to access the variable before declaring it, we don't get an error, we get undefined.
console.log(wish)
var wish
// If we try the same but by assigning a value,  we'll still get undefined !

console.log(`var has too many quirks and strange behaviours. We just don't use it anymore.`)
console.log(line)