let notes = getSavedNotes()

// TASK : render the data in the HTML

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// TASK : When click button, add a note

document.querySelector('#create-btn').addEventListener('click', function (e) {
    // console.log('Button has been clicked !')
    // 1. Use uuidv4 to generate a random id
    const id = uuidv4()

    // 2. Create a timestamp for our note using momentjs library
    const timestamp = moment().valueOf()

    // 3. Create new note
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    // 4. Save new note to local storage
    localStorage.setItem('notes', JSON.stringify(notes))

    // old. Re-render the application
    // renderNotes(notes, filters)

    // 5. Redirect to  the edit.html page
    location.assign(`/edit.html#${id}`)
})

// TASK : Filter notes according to user input

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// TASK : Listen for a dropdown

document.querySelector('#filter-by').addEventListener('change', function  (e) {
    // console.log(e.target.value)
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// TASK : Listen  for a change of text from the edit page on the home page

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // 1. Parse the  new data and update notes
        notes = JSON.parse(e.newValue)

        // 2. Re-render the notes
        renderNotes(notes, filters)
    }
})

// *** NOTES & EXTRA TASKS ***

// DOM - Document  Object Model

// Initial test : we attached the script correctly : 
// console.log(`This is from a different file.`)

// TASK : Add a new element

// 1. Create the element
// const newParagraph = document.createElement('p')
// 2. Update its content
// newParagraph.textContent = 'This is a new element from JS.'
// 3. Put it somewhere on the page
// document.querySelector('body').appendChild(newParagraph)

// JSON : JavaScript Object Notation

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// --> {"name": "Cecile", "age": 26}
// JSON only uses double quotes, note how the keys are also wrapped in them

// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

// TASK : Query and  remove

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

// TASK : apply CRUD (Create, Read, Update, Delete)

// 1. Create
// localStorage.setItem('key', 'value')

// 2. Read
// console.log(localStorage.getItem('key'))

// 3. Update - same as create, we re-assign the value

// 4. Remove
// localStorage.removeItem('key')

// 5. Clear all data from localStorage
// localStorage.clear()

// TASK : Add a note

// document.querySelector('#add-note-form').addEventListener('submit', function (e) {
//     // Cancel default behaviour of the form (refresh)
//     e.preventDefault()

//     // Access the data - print it then clear it out
//     console.log(e.target.elements.addNote.value)
//     e.target.elements.addNote.value = ''
// })

// TASK : Listen for a checkbox

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     // checked property is a boolean
//     console.log(e.target.checked)
// })

// TASK: Messing around with dates in JS

// Unix Epoch - January 1st 1970 00:00:00
// positive numbers for dates after the Unix Epoch
// negative numbers for fates BEFORE the Unix Epoch
// --> -60 000 is 1 minute before the Unix Epoch (it's in milliseconds!)

// // use "new" to create a new instance of Date
// const now = new Date()
// console.log(now.toString())
// // --> Wed Mar 06 2019 11:07:57 GMT+0000 (Greenwich Mean Time)
// console.log(`Year: ${now.getFullYear()}`)
// // --> Year: 2019
// console.log(`Month: ${now.getMonth()}`)
// // --> Month: 2 (this is zero index, so we get 2 for March, it is correct! - although annoying)
// console.log(`Day of month: ${now.getDate()}`)
// // --> Day: 6 (this is the correct day! It's now March 6th!)
// console.log(`Hour: ${now.getHours()}, Minute: ${now.getMinutes()}, Seconds: ${now.getSeconds()}`)
// // --> Hour: 11, Minute: 14, Seconds: 52
// console.log(now.getTime())
// // --> 1551872346263
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// console.log('________________')

// const fixedTime = new Date('January 21 2001 6:25:01')
// const year = fixedTime.getFullYear()
// const month = fixedTime.getMonth() + 1
// const day = fixedTime.getDate()
// const hour = fixedTime.getHours()
// const minute = fixedTime.getMinutes()
// const second = fixedTime.getSeconds()
// console.log(`The date we chose is ${day}/${month}/${year}, ${hour}:${minute}:${second} for January 21 2001 6:25:01`)

// TASK: Play around with dates
// // 1. Create two dates in the past 
// const dateOne = new Date('January 01 2019 8:00:00')
// const dateTwo = new Date('February 15 2019 7:00:00')
// // 2. Get timestamps for both
// const timestampOne = dateOne.getTime()
// const timestampTwo = dateTwo.getTime()
// // 3. Figure out which is the first and print its time (use toString)
// if (timestampOne < timestampTwo) {
//     console.log(`${dateOne.toString()} is the further date in the past`)
// } else if (timestampTwo < timestampOne) {
//     console.log(`${dateTwo.toString()} is the further date in the past`)
// } else  {
//     console.log(`The two dates are the same!`)
// }

// console.log('________________')

// TASK: Play around with momentjs

// const nowMoment = moment()
// console.log(nowMoment.toString())
// console.log(nowMoment.minute())
// nowMoment.minute(1)
// console.log(nowMoment.toString())
// console.log(nowMoment.minute())

// nowMoment.add(1, 'year').subtract(20, 'days')
// console.log(nowMoment.toString())

// // Check the tokens and ouputs for format()
// // --> https://momentjs.com/docs/#/displaying
// console.log(nowMoment.format('MMMM Do, YYYY'))
// // -->  February 16th, 2020
// console.log(nowMoment.fromNow())
// // --> in a year (from now, because we added 1 year earlier)

// const nowTimestamp = nowMoment.valueOf()
// console.log(nowTimestamp)
// // --> in milliseconds 1581865286949
// console.log(moment(nowTimestamp).toString())

// // TASK: Challenge with  momentjs
// const birthday = moment()
// birthday.date(8).month(7).year(1992) // months are 0 indexed!!
// console.log(birthday.format('MMM D, YYYY'))