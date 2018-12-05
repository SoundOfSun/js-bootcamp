// Run $ node 01-note.js to print to the terminal

let line = '--------------------'

console.log(`Our list:`)

const notes = ['Note 1', 'Note 2', 'Note 3']
// index          0         1         2

console.log(notes)
console.log(`How many items are there in the list ?`)
console.log(notes.length)
console.log(line)

console.log(`Access elements of arrays using the index.`)
console.log(`First element is index 0`)
console.log(notes[0])
console.log(line)

console.log(`Access the element at the end of the list:`)
console.log(notes[notes.length -1])
console.log(line)

console.log(`Add a new note at the end of the list, with the push method:`)
// Add the item at the end of the list
notes.push('Note 4')
console.log(notes)
console.log(line)

console.log(`Remove a note at the end of the list, with the pop method:`)
// Remove the last item of the list
notes.pop()
console.log(notes)
console.log(line)

console.log(`Remove the first item of the list, with shift method:`)
notes.shift()
console.log(notes)
console.log(line)

console.log(`Add a new note at the start of the list, with the push method:`)
notes.unshift(`Note 1`)
console.log(notes)
console.log(line)

console.log(`Remove a note anywhere we want in the list, with the splice method:`)
notes.splice(2, 1, 'New Note 3') // index, number of things we want to remove, things to remove the indexed element with
console.log(notes)
console.log(line)

console.log(`Re-assign the value of the first element on the list:`)
notes[0] = 'New Note 1'
console.log(notes)
console.log(line)