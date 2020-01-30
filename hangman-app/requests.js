// const getPuzzle = (callback) => {
//     // return 'My new puzzle'

//     // 1. Making an HTTP request:
//     const request = new XMLHttpRequest()

//     // Here, the Event does not fire until the whole function was executed
//     // so having a return after the EventListener doesn't work, it would return BEFORE the EventListener
//     // instead, we use the callback pattern in app.js: getPuzzle()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // check for the success status
//             console.log(e.target.status)
//             // We want to parse the responseText's value to get a regular JS object
//             const data = JSON.parse(e.target.responseText)
//             // Print the XMLHttpRequest object
//             console.log(e.target)
//             // Print the parse data
//             console.log(data)
//             // call getPuzzle() WHEN we have the data
//             // REMEMBER: First argument is passed for the error!!
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//             // console.log('An error has taken place')
//         }
//     })

//     // 2. Initialize the request with URL and HTTP method:
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
//     // 3. Send off the request, the process will take a bit of time to reach the server, process, and have the server provide a response back
//     request.send()
// }

// Now we'll change getPuzzle from a callback API to a promise API
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     // 1. Making an HTTP request:
//     const request = new XMLHttpRequest()

//     // Here, the Event does not fire until the whole function was executed
//     // so having a return after the EventListener doesn't work, it would return BEFORE the EventListener
//     // instead, we use the callback pattern in app.js: getPuzzle()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // check for the success status
//             // console.log(e.target.status)
//             // We want to parse the responseText's value to get a regular JS object
//             const data = JSON.parse(e.target.responseText)
//             // Print the XMLHttpRequest object
//             console.log(e.target)
//             // Print the parse data
//             console.log(data)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     // 2. Initialize the request with URL and HTTP method:
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     // 3. Send off the request, the process will take a bit of time to reach the server, process, and have the server provide a response back
//     request.send()
// })

// Now we'll change getPuzzle from and XMLHttpRequest to a fetch API call
// const getPuzzle = (wordCount) => {
//     // Call to getch
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             // return the promise
//             return response.json()
//         } else {
//             throw new Error('Unable to fetcht the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// Now we'll change getPuzzle from a fetch function to an async function
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        // wait until we have the json
        const data = await response.json()
        //  give us access to  the puzzle
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// const getCountry = (countryCode, callback) => {
//     const countryRequest = new XMLHttpRequest()

//      countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // Print the XMLHttpRequest object to access the keys (i.e responseText)
//             console.log(e.target)
//             const data = JSON.parse(e.target.responseText)
//             // Print the parse data
//             console.log(data)
//             // Iterate over the array an store the result in variable
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             // Pass to the callback function the name (key called name) matching the countryCode defined above 'FR'
//             callback(undefined, country)
//         } else if (e.target.readyState === 4) {
//             // Pass the error to the callback function
//             callback('Unable to fetch data', undefined)
//         }
//     })
    
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()

// }

// Now we'll change getCountry from a callback API to a promise API
// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//      countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // Print the XMLHttpRequest object to access the keys (i.e responseText)
//             console.log(e.target)
//             const data = JSON.parse(e.target.responseText)
//             // Print the parse data
//             console.log(data)
//             // Iterate over the array an store the result in variable
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             // Pass to the callback function the name (key called name) matching the countryCode defined above 'FR'
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data')
//         }
//     })
    
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })

// Now we'll change getCountry from and XMLHttpRequest to a fetch API call
// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch country')
//         }
//     }).then((data) => data.find((country) => country.alpha2Code === countryCode))
//     // --> Do a bit of shorthand notation
// }

// Now we'll change getCountry from a fetch function to an async function
const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ('Unable to fetch the country')
    }
}