// With new class syntax
class Hangman {
    constructor(wordToGuess, remainingGuesses) {
        this.wordToGuess = wordToGuess.toLowerCase().split('')
        this.remainingGuesses  = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'        
    }
    getStatus() {
        // playing, finished or failed

        // every function - (does every item in the array meet the requirement set)
        const finished = this.wordToGuess.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        // --> the letter === ' ' accounts for a space in the game's word such as 'ice cream'

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }       
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was: ${this.wordToGuess.join('')}.`
        } else {
            return 'Nice work! You guessed the word.'
        }       
    }
    get puzzle() {
        // 1. Create an empty string
        let puzzle = ''

        // 2. Add to puzzle by adding the correct guessed letters or a *
        this.wordToGuess.forEach((letter) => {
            // --> the letter === ' ' accounts for a space in the game's word such as 'ice cream'
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        // 3. Return the string with the letters guessed and an asterisk if not
        return puzzle
    }
    makeGuess(guess) {
        // 1. Convert inputted guess to lowercase = case-insensitive
        guess = guess.toLowerCase()

        // --> condition to see if guess is unique = not included in the guessedLetters array yet
        const isUnique = !this.guessedLetters.includes(guess)
        // --> condition to see if guess is a bad guess = not included in the word
        const isBadGuess =  !this.wordToGuess.includes(guess)

        // 4. If status isn't playing, stop accepting new guesses
        if (this.status !== 'playing') {
            return
            // return with nothing will return "undefined" and prevent the rest of the function from running
        }

        // 2. Define if guess is unique = if not included in guessedLetters yet, then add it to guessedLetters array
        if (isUnique) {
            this.guessedLetters.push(guess)
        } 

        // 3. Decrement remaining guesses IF guess is unique and not included in the word
        if (isUnique && isBadGuess) {
            this.remainingGuesses--  // shorthand to decrement by 1
        }

        this.getStatus()
    }
}

// const Hangman = function (wordToGuess, remainingGuesses) {
//     this.wordToGuess = wordToGuess.toLowerCase().split('')
//     this.remainingGuesses  = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.getStatus = function () {
//     // playing, finished or failed

//     // THIRS APPROACH - every (does every item in the array meet the requirement set)
//     const finished = this.wordToGuess.every((letter) => this.guessedLetters.includes(letter))

//     // SECOND APPROACH - filter
//     // const lettersUnguessed = this.wordToGuess.filter((letter) => {
//     //     // returns true when letters haven't been guessed yet
//     //     return !this.guessedLetters.includes(letter)
//     // })

//     // const finished = lettersUnguessed.length === 0

//     // FIRST APPROACH - if else with includes
//     // let finished = true

//     // this.wordToGuess.forEach((letter) => {
//     //     if (this.guessedLetters.includes(letter)) {
           
//     //     } else {
//     //         finished = false
//     //     }
//     // })

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was: ${this.wordToGuess.join('')}.`
//     } else {
//         return 'Nice work! You guessed the word.'
//     }
// }

// Hangman.prototype.getPuzzle = function () {
//     // 1. Create an empty string
//     let puzzle = ''

//     // 2. Add to puzzle by adding the correct guessed letters or a *
//     this.wordToGuess.forEach((letter) => {
//         if (this.guessedLetters.includes(letter)) {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     // 3. Return the string with the letters guessed and an asterisk if not
//     return puzzle
// }

// Hangman.prototype.makeGuess = function (guess) {
//     // 1. Convert inputted guess to lowercase = case-insensitive
//     guess = guess.toLowerCase()

//     // --> condition to see if guess is unique = not included in the guessedLetters array yet
//     const isUnique = !this.guessedLetters.includes(guess)
//     // --> condition to see if guess is a bad guess = not included in the word
//     const isBadGuess =  !this.wordToGuess.includes(guess)

//     // 4. If status isn't playing, stop accepting new guesses
//     if (this.status !== 'playing') {
//         return
//         // return with nothing will return "undefined" and prevent the rest of the function from running
//     }

//     // 2. Define if guess is unique = if not included in guessedLetters yet, then add it to guessedLetters array
//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     } 

//     // 3. Decrement remaining guesses IF guess is unique and not included in the word
//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--  // shorthand to decrement by 1
//     }

//     this.getStatus()
// }