// Code your solutions in this file


// function writeCards(names, event) {
//   let thankyouCards = []
//   for (i in names) {
//       thankyouCards.push(`Thank you, ${names[i]}, for the ${event} gift!`)
//   }
// }

function writeCards(names, event) {
  let thankYouCards = []

  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

function countDown(num) {
  let i = num
  while (i>=0) {
    console.log(i)
    i--
  }
  
}