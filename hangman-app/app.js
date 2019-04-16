let line = '--------------------'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

const game1 = new Hangman('Ice Cream', 5)
// puzzleEl.textContent = game1.getPuzzle()
// guessesEl.textContent = game1.getStatusMessage()
// statusEl.textContent = game1.getStatus()

// Now we're using getters and setters
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

// console.log(game1)
// console.log('Let\'s guess b, t, z')
// Guess b, t, z
// game1.makeGuess('b')
// game1.makeGuess('t')
// game1.makeGuess('z')
console.log(game1.puzzle)
// --> Should print b*****
console.log(game1.remainingGuesses)
// --> Should print 3
// console.log(line)

window.addEventListener('keypress', function (e) {
    // console.log(e)
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    // puzzleEl.textContent = game1.getPuzzle()
    // guessesEl.textContent = game1.getStatusMessage()

    // Now we're using getters and setters
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

    // statusEl.textContent = game1.getStatus()
    // call getStatus here,  console.log for now
})

// const game2 = new Hangman('Institutionalised', 5)
// console.log(game2)
// console.log('Let\'s guess i, t, p')
// // Guess i, t, p
// game2.makeGuess('i')
// game2.makeGuess('t')
// game2.makeGuess('p')
// // --> Should print i**tit*ti****i***
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)
// // --> Should print 4
// console.log(line)