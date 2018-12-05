// Run $ node 08-scope.js to print to the terminal

let line = '--------------------'

// Global scope - Defined outside of all code blocks
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    //  varTwo is not accessible outside of this block
    // Local scope - Defined inside a code block
    console.log(varTwo)
}

if (true) {
    let varThree = 'varThree'
    console.log(varThree)

    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
    }
}

console.log(line)

// PART TWO of Scope

let name = 'Cécile'

if (true) {
    let  name = 'Alice'

    if (true) {
        name = 'Jeanne'
        console.log(name) // Alice will show up when we run the programme
        // now that we are re-assigning name, Jeanne will show up here.
        age = 28
        console.log(age) // It won't find a local or global variable, so it will declare it
        // This is called a Leaked Global
    }
}

if (true) {
    console.log(name) // It cannot access the variable inside the other block, so it will look for the global variable
}