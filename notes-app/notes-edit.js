const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

// TASK : Validation - valid ID
// 1. Get the  hash value without the hash symbol - index 0 of the substring.
const noteId = location.hash.substring(1)

// 2. Access the  notes saved in the local storage
let notes =  getSavedNotes()

// 3. See if there is a match
let note = notes.find(function (note) {
    return note.id === noteId
}) 

// 4. If there isn't a match, kick the user back to the homepage
if (note === undefined) {
    location.assign('/index.html')
}

// 5.  Set up the placeholders values to the note's current title and body values + date span now
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// TASK : Let the user edit a note's title and body and save the changes to local storage
// 1. Setup input event for title: save the new title the user types in
titleElement.addEventListener('input', function (e) {
    // set the note's object title key's value to the input
    note.title = e.target.value
    //  set the updatedAt value to the new timestamp
    note.updatedAt = moment().valueOf()
    // set the last edited message
    dateElement.textContent = generateLastEdited(note.updatedAt)
    // save changes to local storage
    saveNotes(notes)
})

// 2.  Setup input event for body: save the new title the user types in
bodyElement.addEventListener('input', function (e) {
    // set the note's object body key's value to the input
    note.body = e.target.value
    // set the updatedAt value to the new timestamp
    note.updatedAt = moment().valueOf()
    // set the last edited message
    dateElement.textContent = generateLastEdited(note.updatedAt)
    // save changes to local storage
    saveNotes(notes)
})

// 3. Setup a remove button  that removes notes and sends user back to homepage
removeElement.addEventListener('click', function (e) {
    // re-use  the removeNote function
    removeNote(note.id)
    // save changes to local storage
    saveNotes(notes)
    // redirect the user to the homepage
    location.assign('/index.html')
})

// TASK : Make sure if several tabs of same URLs are open, they're all updated
// 1. Add the event listener : storage - it only fires on the other tabs, not the one in which we interact.
window.addEventListener('storage', function (e) {
    // access latest data which lives on e IF the storage's key is 'notes' (in case the application has several local storage keys)
    if (e.key === 'notes') {
        // parse the data on newValue (another property of the storage event)
        notes = JSON.parse(e.newValue)

        // render the data to the  screen - both the title and body input

        // WARNING: Duplicate code!!
        // See if there is a match
        note = notes.find(function (note) {
            return note.id === noteId
        }) 

        // If there isn't a match, kick the user back to the homepage
        if (note === undefined) {
            location.assign('/index.html')
        }

        // Set up the placeholders values to the note's current title and body values
        titleElement.value = note.title
        bodyElement.value = note.body
        // update the last edited message
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})