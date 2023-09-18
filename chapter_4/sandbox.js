// arguments & parameters

const speak = function (name = 'jarvis', time = 'night') {
  console.log(`Good ${time} ${name}`)
}

speak()
speak('shanice', 'morning')
