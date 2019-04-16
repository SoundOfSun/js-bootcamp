// Run $ node 02-hangman.js to print to the terminal

let line = '--------------------'

// TASK:
// 1. Create the constructor function for the hangman game
// 2. Set up 2 attributes: word, guesses number
// 3. Create 2 instances of it & print

const Hangman = function (wordToGuess, remainingGuesses) {
    this.wordToGuess = wordToGuess.toLowerCase().split('')
    this.remainingGuesses  = remainingGuesses
    this.guessedLetters = ['a']
}

Hangman.prototype.getPuzzle = function () {
    // 1. Create an empty string
    let puzzle = ''

    // 2. Add to puzzle by adding the correct guessed letters or a *
    this.wordToGuess.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    // 2. Return the string with the letters guessed and an asterisk if not
    return puzzle
}

const game1 = new Hangman('Banana', 5)
console.log(game1)
console.log(game1.getPuzzle())
// --> should return : *a*a*a
console.log(line)

const game2 = new Hangman('Institutionalised', 20)
console.log(game2)
console.log(game2.getPuzzle())
// --> should return : ***********a*****
console.log(line)