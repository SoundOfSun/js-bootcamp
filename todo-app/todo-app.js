'use strict'

let todos = getSavedTodos()

// TASK : Filter todos according to input

const filters = {
    searchText: '',
    hideCompleted: false
}

// TASK : Render application todos

renderTodos(todos, filters)

// TASK : filter todos according to user input

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// TASK : Add a todo

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    // 1. Cancel default behaviour of the form (refresh)
    e.preventDefault()

    // 2. Access the data - print it
    console.log(e.target.elements.addTodo.value)
    const data = e.target.elements.addTodo.value

    // 3. Add new item to the array with that text data
    todos.push({
        id: uuidv4(),
        text: data,
        completed: false
    })

    console.log(todos)

    // 6. Save new note to local storage
    saveTodos(todos)

    // 4. Rerender the application
    renderTodos(todos, filters)

    // 5. Clear the input field value
    e.target.elements.addTodo.value = ''
})

// TASK : Listen for a checkbox

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    // checked property is a boolean
    console.log(e.target.checked)

    // 1. Update hideCompleted filter
    filters.hideCompleted = e.target.checked

    // 2. Rerender the application
    renderTodos(todos, filters)
})

// *** NOTES & EXTRA TASKS ***

// TASK: Remove all paragraphs containing "the"

// 1. Target all <p> tages
//const ps = document.querySelectorAll('p')

// 2. For each p, check if there is "the"
//const keyWord = 'the'

// 3. If there is, remove them
// ps.forEach(function (p) {
//     //  innerText or textContent ?
//     if (p.innerText.includes(keyWord)) {
//         p.remove()
//     }
// })

// TASK : Listen for a new todo creation

// document.querySelector('#add-btn').addEventListener('click', function () {
//     console.log('To do has been added !')
// })

// TASK : Listen for todo text change

// document.querySelector('#add-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })