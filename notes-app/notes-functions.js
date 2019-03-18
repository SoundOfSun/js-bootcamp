// FUNCTIONS

// Function 1 : Read existing notes from localStorage

const getSavedNotes = function () {
    // 1. Read localStorage
    const notesJSON = localStorage.getItem('notes')

    // 2. Check content of localStorage
    if (notesJSON !== null) {
        // 3. Parse the data if there is any
        return JSON.parse(notesJSON)
    } else {
        // 4. Empty array if no data
        return []
    }
}

// Function  2 : Save the notes to localStorage

const saveNotes = function (notes) {
    localStorage.setItem('notes',  JSON.stringify(notes))
}

// Function 3 : Remove a note from the list

const removeNote = function(id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex  > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Function 4 : Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    // 1. Create the elements
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // 2. Give the button a content
    button.textContent = 'x'

    // 3. Add the button at the begining of the <div>
    noteEl.appendChild(button)

    // 4. Re-generate the notes after one was removed
    button.addEventListener('click', function() {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // 4. Give the element a content, in this case title
    if (note.title.length > 0) {
        // 5. If title was given by the user input
        textEl.textContent = note.title
    } else {
        // 6. If user input is missing
        textEl.textContent = 'Unnamed note'
    }

    // 7. Now textEl is a <a> link so we need to have a default href
    textEl.setAttribute('href', `/edit.html#${note.id}`)

    // 8. Add the button at the end of the <div>
    noteEl.appendChild(textEl)

    // 9. Return the created element <div> with a <span> content of note.title + <button> x
    return noteEl
}

// Function 5 : Sort notes by one of three ways
const sortNotes =  function  (notes, sortBy) {
    if (sortBy === 'byEdited') {
        // Reminder: the sort method doesn't work on each element of the array but on two items being compared
        return notes.sort(function (a, b) {
            // if a is more recent than  b, sort it before in the array
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            // if a has been created more recently  than b
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            // if a's title is before b - alphabetically
            //  toLowerCase to make this case insensitive
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Function 6 : Render application notes

const renderNotes = function (notes, filters) {
    // limit notes to  those who pass the filters
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)

    // clear the <div> holding the notes before rendering filteredNotes
    document.querySelector('#notes').innerHTML = ''

    // render notes according to the user input
    filteredNotes.forEach(function (note) {
        // create note
        const noteEl = generateNoteDOM(note) 
        // append note to the <div>     
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Function 7 : Generate the last edited message

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}