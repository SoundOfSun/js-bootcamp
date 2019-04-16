// Messing aroung with Objects:

// Object: myObject --> Object.prototype --> null
// literal notation
const product = {
    name: 'Book'
}

// constructor function
// const product = new Object ()
// product.name = 'Audiobook'

// const product = new Object ({ name: 'Magazine'})

// hasOwnProperty --> return true or false
console.log(product.hasOwnProperty('name')) // true
console.log(product.hasOwnProperty('price')) // false

// Primitive value: does not have properties, non-object --> string, number, boolean, null, undefined
// null and underfined are true primitive values, we never access properties or methods on them
// string, number and boolean have properties and methods, they have an object wrapper

// arrays and functions ARE objects and have prototypal inheritance:
const team = ['Lucas', 'Marie']
// const team = new Array(['Lucas', 'Marie']) --> we  never write this for arrays, we use literal notation (above)
console.log(team)
// --> if we open  __proto__ we have access to all the shared methods for arrays
// Array: myArray --> Array.prototype --> Object.prototype --> null
console.log(team.hasOwnProperty('length'))

const getScrore = () => 1
console.log(getScrore)
// Function: myFunction --> Function.prototype --> Object.prototype --> null

const thingToSell = 'Sofa'
console.log(thingToSell)
// returns the string in the console, we can't expand
const otherThingToSell = new String('Rug')
console.log(otherThingToSell)
// returns string as an object that we can  expend, in __proto__ we can now see all the methods we can use on strings
// String: myString --> String.prototype --> Object.prototype --> null

// TO SUM UP - prototype chains

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null