// Run $ node 09-async-await.js to print to the terminal

let line = '--------------------'

// Set a regular arrow function
// const processData = () => {

// }
// --> returns "undefined"

// Set up an async function
// An async function ALWAYS returns a promise
// const processData = async () => {
//     // Try to access the error catching:
//     // throw new Error('Something went wrong!')
//     return 12
// }
// --> returns a promise: Promise { 12 }

// Call processData and print its value
// console.log(processData())

// processData().then((data) => {
//     // In case of success
//     console.log('Data', data)
// }).catch((err) => {
//     // In case of rejection
//     console.log('Error', err)
// })
// --> Data 12

const getDataPromise = (num) => new Promise((resolve, reject)  => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        // reject('This is the error')
    }, 2500)
})

const processData = async () => {
    // Let's use the await operator
    let data = await getDataPromise(2)
    // The code below will not run  until the code above resolves or rejects
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log('Error', err)
})