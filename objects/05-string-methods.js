// Run $ node 05-string-methods.js to print to the terminal

let line = '--------------------'

let name = 'User One'

// Length property

console.log(`How many characters is the string "User One" ?`)
console.log(name.length)
console.log(line)

// Convert to uppercase - method

console.log(`Let's print "User One" all in uppercase:`)
console.log(name.toUpperCase())
console.log(line)

// Convert to lowercase - method

console.log(`Let's print "User One" all in lowercase:`)
console.log(name.toLowerCase())
console.log(line)

//  Includes method

console.log(`Our password to test: "abc123password098"`)
let password = 'abc123password098'

console.log(`Does the password contains the word "password" ?`)
console.log(password.includes('password'))
console.log(line)

// Trim method - remove whitespace of the string from both ends

console.log(`Our string with whitespace:`)
let city = ' London '

console.log(city)
console.log(`Let's get rid of the whitespace in this string:`)
console.log(city.trim())
console.log(line)

// CHALLENGE 3

console.log(`Challenge 3 :  Create a function to validate a password format.`)
console.log(`(8 characters and doesn't contain the word "password")`)

let isValidPassword = function (password) {
   return password.length > 8 && !password.includes('password')
}

console.log(`Test the function with the password "asdp". Is it valid ? `)
console.log(isValidPassword('asdp'))
console.log(`Test the function with the password "abc123#@!". Is it valid ? `)
console.log(isValidPassword('abc123#@!'))
console.log(`Test the function with the password "asdpassword123". Is it valid ? `)
console.log(isValidPassword('asdpassword123'))