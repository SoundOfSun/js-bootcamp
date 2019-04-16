// Run $ node 01-person.js to print to the terminal

let line = '--------------------'

// The object type takes its name from a function
// Construction functions is where we can initalise data for an object

// When we create objects, the convention is to name the function starting with a capital letter

console.log('Creating a new Person object:')

const Person = function (firstName, lastName, age, likes = []) {
    // returns a value implicitly
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// Prototypal inheritance
Person.prototype.getBio = function () {
    let bio = `Info: ${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        // shorthand for bio = bio + smtg
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const person1 = new Person('Jean', 'Dupont', 30, ['Biking', 'Cooking'])
console.log(person1)

console.log('Let\'s change the first name!')
person1.firstName = 'Pierre'
console.log(person1)
console.log(person1.getBio())
console.log(line)

console.log('Let\'s create a second person:')
const person2 = new Person('Eric', 'Bertrand', 51)
console.log(person2)
console.log(person2.getBio())
person2.setName('Joseline Fox')
console.log(person2)
console.log(line)

// Class syntax

class Human {
    // now the constructor is very  explicit
    constructor(firstName, lastName,  age,  likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    } // NO COMMA HERE!!
    // here we can define the methods for this class, no need for prototype
    getBio() {
        let bio = `Info: ${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            // shorthand for bio = bio + smtg
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    // setName(fullName) {
    //     const names = fullName.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    // }
    // let's do it with a custom setter
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const myHuman = new Human('John', 'Smith', 30, ['being a secret agent'])
console.log(myHuman)
console.log(myHuman.getBio())
console.log('Let\'s set the name to JB now:')
// removed the setName method in Human v
// myHuman.setName('James Bond')
// console.log(myHuman.getBio())
console.log(line)

// Prototypal inheritance
// myHuman --> Human.prototype --> Object.prototype --> null

// subclass = a class that inherit behaviour from Human
// we'll need to use the reserved keyword "extends" to inherit all properties and method from Human

class Citizen extends Human {

}

console.log('We can  now create citizen which can also get a bio:')
const myCitizen = new Citizen('Lola', 'Jones', 34, ['eating sweets'])
console.log(myCitizen.getBio())
console.log(line)

class Employee extends Human {
    // we can re-assign the properties from Human + new ones
    constructor(firstName, lastName, age, likes, position) {
        // IMPORTANT LINE to inherit the already  existing Human properties
        super(firstName, lastName, age, likes)
        // and now down below defines what makes "Employee" unique
        this.position = position
    }
    // Let's focus on the getBio version for an employee
    // --> we're creating a new version of getBio for an Employee, this won't affect the one for regular Human
    getBio() {
        return `${this.firstName} ${this.lastName} is a(n) ${this.position}.`
    }
    getYearsLeft() {
        const yearsLeft = 65 - this.age
        return `${this.fullName} has ${yearsLeft} years left to work before retirement.`
    }
}
console.log('Now we\'re making employees:')
// Following the declaration of properties set in the class's constructor
const myEmployee = new Employee('Eric', 'Nam', 30, ['making music'], 'artist')
console.log(myEmployee)
console.log(myEmployee.getBio())
console.log(myEmployee.getYearsLeft())
console.log(line)

class Student extends Human {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the exam!`
    }
    updateGrade(amount) {
        // const newGrade = this.grade += amount
        // const oldGrade = this.grade -= amount
        // return `${this.firstName}'s grade was ${oldGrade}. ${this.firstName}'s score has changed by ${amount}. The new grade is ${newGrade}.`
        this.grade += amount
    }
}

console.log('Let\'s now create a student:')
const myStudent = new Student('Jason', 'Knight', 14, ['basketball'], 80)
console.log(myStudent)
console.log(myStudent.getBio())
myStudent.updateGrade(-40)
console.log(myStudent.getBio())
console.log(line)

const theEmployee = new Employee('Elliot', 'Rogers', 27, [], 'Teacher')
theEmployee.fullName = 'Javier Gomez'
console.log(theEmployee.getBio())