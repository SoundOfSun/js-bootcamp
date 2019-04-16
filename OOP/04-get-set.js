// Run $ node 04-get-set.js to print to the terminal

let line = '--------------------'

const data = {
    location: ''
}

// code that uses the data object

data.location = ' Shanghai   '
console.log(data.location)
console.log(line)

// with custom getters and setters, we can override the regular object property

const data2 = {
    locations: [], // COMMA HERE
    // custom getter
    get location() {
        return this._location
    }, // COMMA HERE!!
    // custom setter
    set location(value) {
        value = value.trim()
        // We can't use location, we're storing it in _location
        this._location = value
        this.locations.push(this._location)
    }
}

console.log('We\'ll perfom sanitization of the data thanks to a custom setter to trim the whitespace:')
data2.location = ' Milano   '
console.log(data2.location)
data2.location = '  New York'
console.log(data2)
console.log(line)