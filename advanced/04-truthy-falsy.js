// Run $ node 04-truthy-falsy.js to print to the terminal

let line = '--------------------'

const products = []
const product = products[0]
// --> will get undefined

// The condition is a boolean with the operator used, not with using true / false
if (product !== undefined) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

console.log(line)

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context

// Falsy values - false, 0, empty  string, null, undefined, NaN