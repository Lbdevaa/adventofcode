
function day1(arr) {
  let counter = 0
  let val = 0

  for (let item of arr) {
    const a = item.slice(0, 1)
    const b = item.slice(1)

    if (a === 'R') {
      const sum = val + b
      if (sum >= 100){
        val = +sum.toString().slice(1)
      } else {
        val = sum
      }
      // 100?
    }
    else {
      const sum = val - b // 1 - 2 = -1

      if (sum < 0){
        val = 100 - b
      } else {
        val = val - b
      }
    }
    if (val === 0) counter++
  }
  return counter
}

console.log('example', day1([
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82"
]))

console.log(day1(d1))