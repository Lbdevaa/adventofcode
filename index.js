// A rotation starts with an L or R which indicates whether the rotation should be to the left (toward lower numbers) or to the right (toward higher numbers). Then, the rotation has a distance value which indicates how many clicks the dial should be rotated in that direction.

// So, if the dial were pointing at 11, a rotation of R8 would cause the dial to point at 19. After that, a rotation of L19 would cause it to point at 0.

// Because the dial is a circle, turning the dial left from 0 one click makes it point at 99. Similarly, turning the dial right from 99 one click makes it point at 0.

// So, if the dial were pointing at 5, a rotation of L10 would cause it to point at 95. After that, a rotation of R5 could cause it to point at 0.

// The dial starts by pointing at 50.

// Following these rotations would cause the dial to move as follows:

// The dial starts by pointing at 50.
// The dial is rotated L68 to point at 82.
// The dial is rotated L30 to point at 52.
// The dial is rotated R48 to point at 0.
// The dial is rotated L5 to point at 95.
// The dial is rotated R60 to point at 55.
// The dial is rotated L55 to point at 0.
// The dial is rotated L1 to point at 99.
// The dial is rotated L99 to point at 0.
// The dial is rotated R14 to point at 14.
// The dial is rotated L82 to point at 32.

// Because the dial points at 0 a total of three times during this process, the password in this example is 3.

function day1(arr) {
  let counter = 0
  let val = 50

  for (let item of arr) {
    const a = item.slice(0, 1)
    const b = item.slice(1)

    if (a === 'R') {
      val = (val + parseInt(b)) % 100
    } else {
      val = (val - parseInt(b) + 100) % 100
    }

    if (val === 0) {
      counter++
    }
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

let d1

const fetchUrl = async () => {
  try {
    const response = await fetch("https://adventofcode.com/2025/day/1/input", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xmlq=0.9,image/avif,image/webp,image/apng,*/*q=0.8,application/signed-exchangev=b3q=0.7",
        "accept-language": "ru-RU,ruq=0.9,en-USq=0.8,enq=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Chromium\"v=\"142\", \"Google Chrome\"v=\"142\", \"Not_A Brand\"v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      "referrer": "https://adventofcode.com/2025/day/1",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    })

    const text = await response.text()
    d1 = text.split('\n')
  } catch (error) {
    console.error(error)
  }
}

fetchUrl()

console.log(d1)