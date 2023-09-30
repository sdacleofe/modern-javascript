function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email)
  this.title = title
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function() {
  // delete user
  console.log(`${this.username} has been deleted.`)
}

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@gmail.com', 'black-belt-ninja')

console.log(userThree)
userThree.deleteUser()