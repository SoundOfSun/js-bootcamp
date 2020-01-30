// Run $ node 08-promises.js to print to the terminal

// let line = '--------------------'

// We'll  simulate a delay with setTimeout. It takes 2 arguments:
//  - the code to run after a certain amount of time has passed
//  - how much time you want to wait, in milliseconds

// ***  Timeout delay
setTimeout(() => {
    // log a message after 2 seconds
    console.log('This time is up')
}, 1500)


// ***  Callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'This is the data')
//         callback('This is the callback error', undefined)
//     }, 4000)
// }

// getDataCallback((err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)  // result: 4
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

// This below is called "Callback Hell" xD - too deeply nested!!
// (which is why promises are more... promising lol)
getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            }  else {
                console.log(data) // result: 8
            }
        })
    }
})

// ***  Promise
// --> create by creating a new instance of Promise, which expects a single argument: a function
// the Promise function comes with 2 args: resolve (things went well) & reject (if something failed)
// const getDataPromise = () => {
//     return new Promise((resolve, reject) => {
//         // the function gets called right away, like an HTTP request
//         // we can use setTimeout to simulate a delay
//         setTimeout(() => {
//             resolve('This is the promise data')
//             // reject('This is the error')
//         }, 6000)
//     })
// }

// const myPromise = getDataPromise

//  call a method on our Promise instance: what to do WHEN we have the info
// it takes data when all goes well,  the secong argument is err
// myPromise().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// You cannot resolve twice, or reject twice, or resolve then reject - sturdier than callback!

const getDataPromise = (num) => new Promise((resolve, reject)  => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num *2) : reject('Number must be provided')
        // reject('This is the error')
    }, 2500)
})

// More efficient than callbacks but still a bit of nesting and two error handlers
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) =>  {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

//  Promise chaining
getDataPromise(10).then((data) => {
    // When  we return a promise from the promise handler, we create promise chaining
    return getDataPromise(data)
    // We can then access to 40 and chain another promise.
}).then((data) => {
    console.log(`Chaining promise data: ${data}`)
}) // Here we could chain another promise etc.  --> no nesting required

getDataPromise(10).then((data) => {
    // When  we return a promise from the promise handler, we create promise chaining
    return getDataPromise(data)
}).then((data) =>  {
    return getDataPromise(data)
}).then((data) => {
    console.log(`Chaining promise data with two other chained promises: ${data}`)
}).catch((err) => {
    console.log(`Error: ${err}`)
}) // we now chained the method catch to handle error in our promise function: 1 single error handler for all our promises