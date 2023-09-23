// fetch API

fetch('json/luigi.json')
  .then((response) => {
    console.log('resolved', response)
    return response.json() // this returns a promise
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('rejected', err)
  })
