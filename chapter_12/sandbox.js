const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  // console.log(request);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText)
  } else if (request.readyState === 4) {
    console.log('could not fetch data')
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/')
request.send()
