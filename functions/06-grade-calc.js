// Run $ node 06-grade-calc.js to print to the terminal

let line = '--------------------'

// students score, total possible score
// -->  letter grade + percentage grade
// 15/20 -->  You got a C (75%) !
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

console.log(`Welcome to the GRADE CALCULATOR`)
console.log(line)

let calcGrade = function (score, total = 100) {
    // Check if the two arguments are both numbers
    // if (typeof score === 'number' && typeof total === 'number') {
    //     // percentage calculation
    //     let percent = (score / total) * 100

    //     //  empty variable for grade
    //     let grade = undefined

    //     // condition for each letter
    //     if (percent >= 90) {
    //         grade = `A`
    //     } else if (percent >= 80) {
    //         grade = `B`
    //     } else if (percent >= 70) {
    //         grade = `C`
    //     } else if (percent >= 60) {
    //         grade = `D`
    //     } else {
    //         grade = `F`
    //     }

    //     // return template string
    //     return  `You got a ${grade} (${percent}%) !`
    // } else {
    //     throw Error('Please provide numbers only')
    // }

    // Check for bad data first instead
    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error('Please provide numbers only')
    }
    
    // percentage calculation
    let percent = (score / total) * 100

    //  empty variable for grade
    let grade = undefined

    // condition for each letter
    if (percent >= 90) {
        grade = `A`
    } else if (percent >= 80) {
        grade = `B`
    } else if (percent >= 70) {
        grade = `C`
    } else if (percent >= 60) {
        grade = `D`
    } else {
        grade = `F`
    }

    // return template string
    return  `You got a ${grade} (${percent}%) !` 
}

// call the function and print the result to the terminal
console.log(`You got 75/100 on your last test. Let's see the grade: `)
try {
    let example = calcGrade(75, undefined)
    console.log(example)
} catch (e) {
    console.log(e.message)
}

console.log(line)

console.log(`You got 17/20 on your last test. Let's see the grade: `)
try {
    let exampleTwo = calcGrade(17, 20)
    console.log(exampleTwo)
} catch (e) {
    console.log(e.message)
}
console.log(line)