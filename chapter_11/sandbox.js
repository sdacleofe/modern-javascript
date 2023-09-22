const before = new Date('August 01, 2023 7:30:59')
const now = new Date()

console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime()
console.log(diff)

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)

console.log(mins)
console.log(hours)
console.log(days)

console.log(`the blog was written ${days} days ago`)

// converting timestamps into date objects
const timestamp = 1675938474990
console.log(new Date(timestamp))
console.log(new Date(now))

// //const before = new Date('02/01/2019 7:30:59');
// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// const diff = now.getTime() - before.getTime();
// // const diff = now - before;

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`the before date was ${mins} mins ago`);
// console.log(`the before date was ${hours} hours ago`);
// console.log(`the before date was ${days} days ago`);

// // converting timestamps to dates
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
