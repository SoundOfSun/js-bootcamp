// Run $ node 02-todo.js to print to the terminal

let line = '--------------------'

console.log(`This is our initial to-do list:`)

let tasks = ['buy groceries', 'book gym classes', 'do online check-in', 'call the doctor', 'water the plants']
//  index          0                    1                   2                  3                    4

console.log(tasks)
console.log(`You have ${tasks.length} tasks to do.`)
console.log(`Todo: ${tasks[0]}`)
console.log(`Todo: ${tasks[tasks.length - 2]}`)
console.log(line)

console.log(`Delete the 3rd item of the list:`)
tasks.splice(2, 1)
console.log(tasks)
console.log(line)

console.log(`Add a new item at the end of the list:`)
tasks.push(`vacuum the bedroom`)
console.log(tasks)
console.log(line)

console.log(`Remove the 1st item of the list:`)
tasks.shift()
console.log(tasks)
console.log(line)