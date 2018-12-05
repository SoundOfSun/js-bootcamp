// Run $ node 04-objects-methods.js to print to the terminal

let line = '--------------------'

// A method is an object property which has a function as the value.

console.log(`Welcome to Coco Cafe:`)

let restaurant = {
    name: 'Coco Cafe',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        //  console.log(this)
        // console.log(this.guestCapacity)
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

console.log(`We currently  have 72 guests for 75 seats.`)
restaurant.seatParty(72)

console.log(`A groupe of 4 clients arrive. Can they be seated ?`)
console.log(restaurant.checkAvailability(4))

console.log(`Five clients left. Can the group of four be seated ?`)
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
console.log(line)

