// 11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124

// The ranges are separated by commas (,); each range gives its first ID and last ID separated by a dash (-).
// 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.

// Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:

// 11-22 has two invalid IDs, 11 and 22.
// 95-115 has one invalid ID, 99.
// 998-1012 has one invalid ID, 1010.
// 1188511880-1188511890 has one invalid ID, 1188511885.
// 222220-222224 has one invalid ID, 222222.
// 1698522-1698528 contains no invalid IDs.
// 446443-446449 has one invalid ID, 446446.
// 38593856-38593862 has one invalid ID, 38593859.
// The rest of the ranges contain no invalid IDs.
// Adding up all the invalid IDs in this example produces 1227775554.

// What do you get if you add up all of the invalid IDs?

// 1-2, 3-4
function day2(str) {
  const ranges = str.split(',')
  let result = 0

  for (let r of ranges) {
    let [a, b] = r.split('-')

    for (let i = +a; i <= +b; i++) {
      const str = i.toString()

      if (str.length % 2 === 0) {
        const start = str.slice(0, str.length / 2)
        const end = str.slice(str.length / 2)

        if (start === end) {
          result += i
        }
      }
    }
  }

  return result
}

day2('11-22,95-115,998-1012,1188511880-1188511890,222220-222224, 1698522-1698528,446443-446449,38593856-38593862,565653-565659, 824824821-824824827,2121212118-2121212124')



let d2

const fetchUrl = async () => {
  try {
    const response = await fetch("https://adventofcode.com/2025/day/2/input", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=0, i",
      "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://adventofcode.com/2025/day/2",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });

    const text = await response.text()
    d2 = text.split('\n')
  } catch (error) {
    console.error(error)
  }
}

fetchUrl()

console.log(d2)

day2("9100-11052,895949-1034027,4408053-4520964,530773-628469,4677-6133,2204535-2244247,55-75,77-96,6855-8537,55102372-55256189,282-399,228723-269241,5874512-6044824,288158-371813,719-924,1-13,496-645,8989806846-8989985017,39376-48796,1581-1964,699387-735189,85832568-85919290,6758902779-6759025318,198-254,1357490-1400527,93895907-94024162,21-34,81399-109054,110780-153182,1452135-1601808,422024-470134,374195-402045,58702-79922,1002-1437,742477-817193,879818128-879948512,407-480,168586-222531,116-152,35-54")