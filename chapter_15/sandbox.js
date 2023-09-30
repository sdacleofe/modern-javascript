class User {
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  
  constructor(username, email, title) {
    super(username, email)
    this.title = title
  }

  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username
    })
  }
}

const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
const userTwo = new User('mario', 'mario@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@gmail.com', 'black-belt-ninja')

console.log(userOne, userTwo, userThree)

let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)
console.log(users)
