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

console.log(`Looping over each element in the array:`)
notes.forEach(function (note, index) {
    console.log(index)
    console.log(note)
})
console.log(line)

console.log(`Let's do for loops, incrementing...`)
//  For loop,  3 arguments: initializer, condition, final expression
// count = count + 1 can  be shortened into count++
for (let count = 0; count <= 2; count++) {
    console.log(count)
}
console.log(`... and decrementing !`)
for (let count = 2; count >= 0; count--) {
    console.log(count)
}
console.log(line)

console.log(`Let's loop over our array with a for loop:`)
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
console.log(line)

console.log(`Let's reverse it:`)
for (let count = notes.length -1 ; count >= 0; count--) {
    console.log(notes[count])
}
console.log(line)

console.log(`Let's find an item we want to delete:`)
console.log(notes.indexOf('Note 2'))
//  If we get -1 then we know the item is nowhere in the array
console.log(line)

console.log(`This is our new array... of objects !`)
const memos = [{
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

console.log(memos)
console.log(`How many notes do we have ?`)
console.log(memos.length)
console.log(line)

console.log(`How many memos about habbits do we have ?`)
const index = memos.findIndex(function (memo, index) {
    return memo.title === 'Habbits to work on'
})
console.log(index)
console.log(line)

console.log(`Let's search the array ! Do we have a memo titled 'My next trip' ?`)
const findMemo = function (memos, memoTitle) {
    // 1. find index
    const index = memos.findIndex(function (memo) {
        return  memo.title.toLowerCase() === memoTitle.toLowerCase()
        // we use toLowerCase method to make the search case insensitive
    })
    // 2. get back the object
    return memos[index]
}

const memo = findMemo(memos, 'My next trip')
console.log(memo)
console.log(line)

console.log(`Let's search the array with the find method  :)`)
const findMemoTwo = function (memos, memoTitle) {
    // 1. find the object directly
    return memos.find(function (memo) {
        return  memo.title.toLowerCase() === memoTitle.toLowerCase()
        // we use toLowerCase method to make the search case insensitive
    })
}

const memoTwo = findMemoTwo(memos, 'Career goal')
console.log(memoTwo)
console.log(line)

console.log(`Let's filter our memos:`)

const findMemos = function (memo, query) {
    // filter always return a new array
    return memos.filter(function (memo, index) {
        const isTitleMatch = memo.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = memo.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findMemos(memos, 'trip'))
console.log(line)

console.log(`Let's sort our memos by title's alphabetical order:`)

const sortMemos = function (memos) {
    // .sort compares 2 elements of the array at a time.
    memos.sort(function (a, b) {
        if  (a.title.toLowerCase() < b.title.toLowerCase()) {
            // a  should come before b
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            // b should come before a
            return 1
        } else {
            // order of a and b are the same because they are identical
            return 0
        }
    })
}

sortMemos(memos)
console.log(memos)
console.log(line)