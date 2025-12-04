
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