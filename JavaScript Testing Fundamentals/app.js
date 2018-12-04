// mocking permission
let args = []
const Permission = {
  granted (...params) {
    args.push([...params])
  }
}
class User {}
const user = new User()

function isUserAdmin () {
  return Permission.granted(user, 'admin')
}

const test = function () {
  isUserAdmin()
  return JSON.stringify(args[0]) === JSON.stringify([user, 'admin'])
}
console.log(test())

// stubs
let Pokemons = {
  // Method we want to replace
  amount () {
    // Call to database
  },
  // Method we want to stay intact
  say (str) {
    console.log('Your Pokedex says: ', str)
  }
}

function howsMyCollection () {
  const size = Pokemons.amount()
  if (size === undefined) {
    return Pokemons.say('Ooops, not sure how many you have')
  }
  if (size < 10) return Pokemons.say('You only have a few, you need more')
  if (size < 50) {
    return Pokemons.say('You have quite some favorites. Keep going')
  }
  return Pokemons.say('You are quite a collector')
}
const orgnalAmount = Pokemons.amount

function fictionalAmount (amount) {
  Pokemons.amount = () => amount
}

function testingMyPokemons (amout) {
  fictionalAmount(amout)
  howsMyCollection()
}

testingMyPokemons(5)
testingMyPokemons(17)
testingMyPokemons(100)

// spies
class Session {
  constructor () {
    this.lastUpdate = Date.now()
  }

  touch () {
    this.lastUpdate = Date.now()
  }
}
const dateSpy = spyOn(Date, 'now')
Date.now()

// A commong way of checking the spy
console.log(dateSpy.called.length > 0)