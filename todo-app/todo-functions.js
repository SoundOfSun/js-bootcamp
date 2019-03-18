// FUNCTIONS

// Function 1 : Read existing todos from localStorage

const getSavedTodos = function () {
    // 1. Read localStorage
    const todosJSON = localStorage.getItem('todos')

    // 2. Check content of localStorage
    if (todosJSON !== null) {
        // 3. Parse the data if there is any
        return JSON.parse(todosJSON)
    } else {
        // 4. Empty array if no data
        return []
    }
}

// Function 2 : Save todos to localStorage

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Function 3 : Remove a todo from the list

const removeTodo = function (id) {
    // 1. Find the id of the todo we want to remove
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    // 2. If there's a match  and the index exists, remove the element from the array.
    if (todoIndex  > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Function 4 : Toggle the completed value for a given todo
const toggleTodo = function (id) {
    // 1. Find the element with the id that is passed
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    // 2. If there is a match, change the  current value of completed to the opposite boolean
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

//  Function  5 : Generate the DOM structure for a todo

const generateTodoDOM = function (todo) {
    // 1. Create the parent <div>
    const todoEl = document.createElement('div')

    // 2. Create the <input> and set the type attribute to checkbox
    const todoCheck = document.createElement('input')
    todoCheck.setAttribute('type','checkbox')

    // 3. Set the value of the checkbox to the completed property
    todoCheck.checked = todo.completed

    // 4. Listen for a change in the checkbox, the change triggers the updating of the completed property's value
    todoCheck.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // 5. Create the <span> and set its content to todo.text + status (completed property)
    const todoText = document.createElement('span')
    todoText.textContent = `${todo.text} (${todo.completed})`

    // 6. Create the <button> and set its content to X for remove / delete
    const button = document.createElement('button')
    button.textContent = 'x'

    // 7. Append elements inside the <div>
    todoEl.appendChild(todoCheck)
    todoEl.appendChild(todoText)
    todoEl.appendChild(button)

    // 8. Re-generate the notes after one was removed
    button.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // 9. Return the created element <p> with info on the two keys text and completed
    return todoEl
}


// Function  6 : Generate the summary  message on the DOM

const generateSummaryDOM = function (countTasks) {
    // 1. Create the element
    const summary = document.createElement('h2')
    // 2. Give the elemend some content
    summary.textContent = `You have ${countTasks} todo(s) left.`
    // 3.  Return  the created element <h2> with sample string and the countTasks content
    return summary

}

// Function  7 : Render application todos

const renderTodos = function (todos, filters) {
    // 1. Limit notes to  those who pass the filters
    const filteredTodos = todos.filter(function (todo) {
        // value of input matches the text content of a or several todos text
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // when hideCompleted is TRUE (checkbox checked) OR todo.completed is FALSE
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        // debugger
        return searchTextMatch && hideCompletedMatch
    })
    console.log(filteredTodos)

    // debugger
    //  -- > Use debugger to stop the code at this point an inspect everything that has run so far
    // In the browser, go to Source. Then with the escape key, toggle the console at the bottom

    // 2. Filter todos not completed
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    console.log(incompleteTodos)

    // 3. Count how many are false - for the summary  !
    const countTasks = incompleteTodos.length
    console.log(countTasks)

    // 4. Clear <div> before we render the todos
    document.querySelector('#todos').innerHTML = ''

    // 5. Print summary message
    document.querySelector('#todos').appendChild(generateSummaryDOM(countTasks))

    // 6. Add a <p> for each todo above 
    filteredTodos.forEach(function (todo, index) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}