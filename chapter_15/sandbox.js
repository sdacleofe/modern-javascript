class User {
  constructor(username, email, score) {
    // setup properties
    this.username = username
    this.email = email
    this.score = 0
  }

  login() {
    console.log(`${this.username} just logged in`)
    return this
  }

  logout() {
    console.log(`${this.username} just logged out`)
    return this
  }

  incScore() {
    this.score += 1
    console.log(`${this.username} has a score of ${this.score}`)
    return this
  }

}

const userOne = new User("mario", 'mario@gmail.com')
const userTwo = new User("luigi", 'luigi@gmail.com')

console.log(userTwo, userTwo)
userOne.login()
userTwo.login().incScore().incScore()
userOne.logout()
userTwo.logout()

userOne.incScore()
userOne.incScore()

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object