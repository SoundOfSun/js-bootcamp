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

// When  we pass a function into a function (function inside forEach function), this is called a callback function

console.log(`What are the remaining tasks ?`)
tasks.forEach(function (task, index) {
    const num = index + 1
    const todo = task.charAt(0).toUpperCase() + task.slice(1)
    console.log(`${num}. ${todo}`)
    // console.log(`${index + 1}. ${task.charAt(0).toUpperCase() + task.slice(1)}`)
    // charAt chooses which character to modify, think of each character as having an index
    // slice is cutting off, the argument 1 is to cut off what's before index 1 = 2nd character
})
console.log(line)

console.log(`Let's print the remaining tasks using a for loop !`)
for (let count = 0; count < tasks.length; count++) {
    const num = count + 1
    const todo = tasks[count]
    console.log(`${num}. ${todo}`)
    // console.log(`${count + 1}. ${tasks[count]}`)
}
console.log(line)

console.log(`Creating array of objects...`)

const todos = [{
    text: 'Buy groceries',
    completed: false
}, {
    text: 'Book gym classes',
    completed: true
},  {
    text: 'Do online check-in',
    completed: false
}, {
    text: 'Call the doctor',
    completed: false
}, {
    text: 'Water the plants',
    completed: true
}]
console.log(todos)
console.log(`The array has been created !`)

console.log(`Removing a todo by text value...`)
const removeToDo = function (todos, todoText) {
    // 1. find object
    const index = todos.findIndex(function (todo) {
        return  todo.text.toLowerCase() === todoText.toLowerCase()
        // we use toLowerCase method to make the search case insensitive
    })
    //  if we find a match, we'll get an index. No match we'll get -1
    // 2. remove the object from the array
    if (index > -1) {
       return todos.splice(index, 1) 
    }
}

const todoToRemove = removeToDo(todos, 'water the plants')
console.log(todoToRemove)
console.log(`Todo has been removed ! New array:`)
console.log(todos)
console.log(line)

const getThingsToDo = function (todos) {
    // filter always return a new array
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))
console.log(line)

console.log(`Let's sort todos by uncompleted first:`)

const sortTodos = function (todos) {
    // .sort compares 2 elements of the array at a time.
    todos.sort(function (a, b) {
        if  (!a.completed && b.completed) {
            // a  should come before b
            return -1
        } else if (!b.completed && a.completed) {
            // b should come before a
            return 1
        } else {
            // order of a and b are the same because they are identical, order doesn't need to be changed
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
console.log(line)