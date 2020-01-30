let line = '--------------------'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

let game1
// puzzleEl.textContent = game1.getPuzzle()
// guessesEl.textContent = game1.getStatusMessage()
// statusEl.textContent = game1.getStatus()

// Now we're using getters and setters
// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

// console.log(game1)
// console.log('Let\'s guess b, t, z')
// Guess b, t, z
// game1.makeGuess('b')
// game1.makeGuess('t')
// game1.makeGuess('z')
// console.log(game1.puzzle)
// --> Should print b*****
// console.log(game1.remainingGuesses)
// --> Should print 3
// console.log(line)

window.addEventListener('keypress', (e) => {
    // console.log(e)
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    // 1. fetching the puzzle
    const puzzle = await getPuzzle('2')
    // 2. creating a new game with that puzzle
    game1 = new Hangman(puzzle, 5)
    // 3. rendering the information to the browser window
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

//  Initiate game
startGame()

// Create a function we can call to get the puzzle from app.js without having all the request process in here
// getPuzzle("2", (error, puzzle) => {
//     // If there is an error, print message
//     if (error) {
//         console.log(`Error: ${error}`)
//     // else, if the data is correct, pass puzzle to the game
//     } else {
//         console.log(puzzle)
//     }
// })

// let's call then on the promise
// .then where you pass 2 functions: 1 for when the call works and when the call is rejected
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// let's arrange getPuzzle to work with the fetch API
// getPuzzle('2').then((puzzle) => {
//     console.log(`Puzzle from API call: ${puzzle}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// Task : convert getCountry to return a promise

// getCountry('FR', (error, country) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(`Country name: ${country.name}`)
//     }
// })

// getCountry('FR').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry('FR').then((country) => {
//     console.log(`Country from API call: ${country.name}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// Task : convert getCountry re working with the fetch API

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

// **************************

// HTTP  - Hyper Text Transfer Protocol
// We want to set an HTTP request to communicate with another server, like a third-party random word generator

// Request - What do we want to do?
// Response - Information about what was actually done

// // 1. Making an HTTP request:
// const request = new XMLHttpRequest() 

// //  4. Add an event listener to actually do something with the received data, readystatechange fires 5 times
// //  There are 5 states under  readystatechange:
// // 0 - unsent, 1 - opened, 2 - deaders_received, 3 - loading, 4 - done
// // --> we only want to acess number 4 - done AND we only want to run  the code when  the response is "done" SUCCESSFULLY
// request.addEventListener('readystatechange', (e) => {
//  if (e.target.readyState === 4 && e.target.status === 200) {
//      // check for the success status
//      console.log(e.target.status)
//      // We want to parse the responseText's value to get a regular JS object
//      const data = JSON.parse(e.target.responseText)
//      // Print the XMLHttpRequest object
//      console.log(e.target)
//      // Print the parse data
//      console.log(data)
//  } else if (e.target.readyState === 4) {
//      console.log('An error has taken place')
//  }
// })

// // 2. Initialize the request with URL and HTTP method:
// // request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// // 3. Send off the request, the process will take a bit of time to reach the server, process, and have the server provide a response back
// request.send()

// // Status : 200 OK - degree of success of the request

// // TASK - Use a new API and create a request for a country

// const countryCode = 'FR'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         // Print the XMLHttpRequest object to access the keys (i.e responseText)
//         console.log(e.target)
//         const data = JSON.parse(e.target.responseText)
//         // Print the parse data
//         console.log(data)
//         // Iterate over the array an store the result in variable
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         // Print the name (key called name) matching the countryCode defined above 'FR'
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()



// ****************

// Synchronous vs Asynchronous execution

// Synchronous execution is when we start a task and we need to wait for the task to be done before we can do something else
// Asynchronous execution is when we start a task, but we can do something else before the task finishes

//  Synchronous example
// const puzzle = getPuzzleSync()
// --> imagine that we don't rely on callback
// console.log(puzzle)

// console.log('Do something else')
// --> The log will print after getPuzzleSync finished its task

// --> Synchronous execution is deprecated, because we block task 2 from operating before task 1 finishes when task 2 doesn't need any data from task 1
// Synchronous execution prevents unrelated bits of Javascript to execute as long as one task is performing, which is a disaster for the end user

// Asynchronous example
// getPuzzle((error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// console.log('Do something else')
// --> The log will print before getPuzzle finished that task

// ****************

// Fetch API --> acces by calling fetch() : 2 arguments, the URL and something else we can  see in the documention
// Fetch returns a promise (resolve or reject)
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     // We just need to figure HOW it completed, but we know it did comple because otherwise it wouldn't run
//     if (response.status === 200) {
//         // Do smtg with data: parse it as JSON
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//         // --> will get catch to execute down below
//     }
// }).then((data) => {
//     // This handler gets acces to the parse JSON data
//     console.log(`puzzle from the chained promise: ${data.puzzle}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })