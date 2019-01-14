console.log(`This is from a different file.`)

// DOM - Document  Object Model

const notes = [{
    title: 'My next trip',
    body: 'Trip to Martinique, January 2019.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise.  Eating a bit better.'
}, {
    title: 'Career goal',
    body: 'Pay raise. Find a meaningful field.'
}, {
    title: 'Blog post ideas',
    body: 'A story for each trip I made in 2018.'
}]

// Query and  remove
// const p = document.querySelector('p')
// p.remove()

// TASK : replace text of <p>s with ****

// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     // console.log(p.textContent)
//     //p.remove()
//     p.textContent = '*****'
// })

// TASK : Add a new element

// 1. Create the element
const newParagraph = document.createElement('p')
// 2. Update its content
newParagraph.textContent = 'This is a new element from JS.'
// 3. Put it somewhere on the page
document.querySelector('body').appendChild(newParagraph)

// TASK : When click button, add a note

// document.querySelector('#create-btn').addEventListener('click', function (e) {
//     console.log('Button has been clicked !')
//     console.log(e)
//     e.target.textContent = 'The button was clicked'
// })

// TASK : target the second button

// 1. The unspecific way
// document.querySelectorAll('button')[1].addEventListener('click', function () {
//     console.log('Deleted all notes')
// })

// 2. Using a unique identifyer
// document.querySelector('#remove-btn').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// -- Single selector --
// p
// #id
// .class

// -- Multiple selectors - even more specific ! --
// p#id
// button.class
// h1#title.class
// h1.class#title

// TASK : listen to an event change on the input

// document.querySelector('#search-text').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

// TASK : render the data in the HTML

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    // limit notes to  those who pass the filters
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)

    // clear the <div> holding the notes before rendering filteredNotes
    document.querySelector('#notes').innerHTML = ''

    // render notes according to the user input
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// TASK : Add a note

// document.querySelector('#add-note-form').addEventListener('submit', function (e) {
//     // Cancel default behaviour of the form (refresh)
//     e.preventDefault()

//     // Access the data - print it then clear it out
//     console.log(e.target.elements.addNote.value)
//     e.target.elements.addNote.value = ''
// })

// TAKS : Listen for a checkbox

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     // checked property is a boolean
//     console.log(e.target.checked)
// })

// TASK : Listen for a dropdown

document.querySelector('#filter-by').addEventListener('change', function  (e) {
    console.log(e.target.value)
})