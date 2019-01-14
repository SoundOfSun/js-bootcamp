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

// TASK : Filter todos according to input

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    // limit notes to  those who pass the filters
    const filteredTodos = todos.filter(function (todo) {
        // value of input matches the text content of a or several todos text
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // when hideCompleted is TRUE (checkbox checked) OR todo.completed is FALSE
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    console.log(filteredTodos)

    // Firgure out if the checkbox is checked or not
    // If use this, change filteredTodos to let variable
    // filteredTodos = filteredTodos.filter(function (todo) {
    //     // if (filters.hideCompleted) {
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }

    //     return !filters.hideCompleted || !todo.completed
    // })

    // TASK : print summary message "You have 3 todos left." (<p> tag)

    // 1. Filter todos not completed
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    console.log(incompleteTodos)

    // 2. Count how many are false - for the summary  !
    const countTasks = incompleteTodos.length
    console.log(countTasks)

    // Clear <div> before we render
    document.querySelector('#todos').innerHTML = ''

    // 3. Print summary message
    const summary = document.createElement('h2')
    summary.textContent = `You have ${countTasks} todo(s) left.`
    document.querySelector('#todos').appendChild(summary)

    // TASK : add a <p> for each todo above 
    filteredTodos.forEach(function (todo, index) {
        const p = document.createElement('p')
        p.textContent = `${index + 1}. ${todo.text} (${todo.completed})`
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// TASK : Listen for a new todo creation

// document.querySelector('#add-btn').addEventListener('click', function () {
//     console.log('To do has been added !')
// })

// TASK : Listen for todo text change

// document.querySelector('#add-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

// TASK : Add a todo

document.querySelector('#add-todo-form').addEventListener('submit', function (e) {
    // 1. Cancel default behaviour of the form (refresh)
    e.preventDefault()

    // 2. Access the data - print it
    console.log(e.target.elements.addTodo.value)
    const data = e.target.elements.addTodo.value

    // 3. Add new item to the array with that text data
    todos.push({
        text: data,
        completed: false
    })

    console.log(todos)

    // 4. Rerender the application
    renderTodos(todos, filters)

    // 5. Clear the input field value
    e.target.elements.addTodo.value = ''
})

// TAKS : Listen for a checkbox

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    // checked property is a boolean
    console.log(e.target.checked)

    // 1. Update hideCompleted filter
    filters.hideCompleted = e.target.checked

    // 2. Rerender the application
    renderTodos(todos, filters)
})