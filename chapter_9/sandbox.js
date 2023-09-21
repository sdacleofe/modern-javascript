const scores = [10, 5, 0, 40, 90, 10, 30, 70]

const firstHighScore = scores.find((score) => {
  return score > 50
})

console.log(firstHighScore)
