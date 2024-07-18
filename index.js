// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Wrapped ${array[i]} and added a bow!`);
    debugger;
  }
}

// wrapGifts(gifts);

function writeCards(array, eventName) {
  let thankYouMessages = [];
  for (let i = 0; i < array.length; i++) {
    const cardMessage = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(cardMessage);
    console.log(cardMessage);
  }
  console.log(thankYouMessages);
  return thankYouMessages;
}
let peopleToThank = ['Guadalupe', 'Ollie', 'Aki'];
// writeCards(peopleToThank, 'birthday');

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
countDown(10);
