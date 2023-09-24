// async & await

const getTodos = async () => {
  const response = await fetch('json/luigi.json')
  const data = await response.json()
  return data
}

console.log(1) 
// this is non blocking
getTodos()
.then(data => console.log('resolved:', data))
console.log(2)


// const getTodos = async () => {

//   let response = await fetch('json/luigi.json');
//   let data = await response.json();
//   return data;

// };

// console.log(1);
// console.log(2);

// getTodos()
//   .then(data => console.log('resolved:', data));

// console.log(3);
// console.log(4);

// // console.log(getTodos());