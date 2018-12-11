// Run $ node 03-expense-tracker.js to print to the terminal

let line = '--------------------'

console.log(`This is our initial account:`)

const account = {
    name: 'User One',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        }) 

        let balance = totalIncome - totalExpenses
        return `Account for ${this.name} has £${balance.toFixed(2)}: £${totalIncome.toFixed(2)} in income, and £${totalExpenses.toFixed(2)} in expenses.`
    }
}

console.log(account)
console.log(line)

console.log(`Now let's add income and expenses and print a summary:`)

account.addIncome('Salary', 2090)
account.addIncome('Blog', 300)
account.addExpense('Rent', 520)
account.addExpense('Drink', 3.80)
console.log(account.getAccountSummary())
console.log(line)