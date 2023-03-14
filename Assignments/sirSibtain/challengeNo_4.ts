// Sir Sibtain Assignments
// Challenge # 5
// Generate Random Number in a given range (inclusive of both end & start limits)

function generateRandomNumber(start:number, end:number):number {
  let multiplier = end - start +1
  return Math.floor(Math.random() * multiplier) + start
}
console.log(generateRandomNumber(3, 9))
