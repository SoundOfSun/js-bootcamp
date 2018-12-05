// Run $ node 03-objects-references.js to print to the terminal

let line = '--------------------'

let userOneAccount = {
    name: 'User 1',
    expenses: 0,
    income: 0
}

let otherAccount = userOneAccount
// manipulates the original object's property
otherAccount.income = 1000

let addExpense = function (account, amount) {
    // assign new value - only manipulates the reference, not the original object
    // account = {}
    // console.log(account)
    // manipulate the object referenced as account
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance  = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

console.log(`This is our account:`)
console.log(userOneAccount)
console.log(`Now we're adding an income:`)
addIncome(userOneAccount, 1000)
console.log(userOneAccount)
console.log(line)

console.log(`Now we're adding an expense:`)
addExpense(userOneAccount, 2.50)
console.log(userOneAccount)
console.log(line)

console.log(`Now we're adding a second expense:`)
addExpense(userOneAccount, 9.99)
console.log(userOneAccount)
console.log(`Now we're getting a summary:`)
summary = getAccountSummary(userOneAccount)
console.log(summary)
console.log(line)

console.log(`Now we're resetting the account:`)
resetAccount(userOneAccount)
finalSummary = getAccountSummary(userOneAccount)
console.log(finalSummary)
console.log(line)