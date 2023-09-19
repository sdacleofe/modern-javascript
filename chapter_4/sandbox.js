// callbacks & forEach

// const myFunc = (callbackFunc) => {
//   let value = 50
//   callbackFunc(value)
// }

// myFunc(function (value) {
// do something
//   console.log(value)
// })

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson)

// people.forEach((person, index) => {
//   console.log(index, person)
// })
