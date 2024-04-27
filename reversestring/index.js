// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Review solution #1
//function reverse(str) {
// const arr= str.split('');
// arr.reverse();
// return arr.join('');
// OR
//   return str.split("").reverse().join("");
//}

// Review Solution #2
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Review Solution #3
function reverse(str) {
  return str
    .split("")
    .reduce((rev,ch) => ch + rev,"");
} 
module.exports = reverse;
