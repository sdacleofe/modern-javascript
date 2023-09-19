// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  },
  logBlogs: function () {
    // access the blogs using 'this' keyword
    // console.log(this.blogs)
    console.log('this user has written the following blogs:')
    this.blogs.forEach((blog) => {
      console.log(blog)
    })
    console.log(this)
  },
}

user.logBlogs()
console.log(this)
