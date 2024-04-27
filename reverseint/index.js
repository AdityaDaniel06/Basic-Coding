// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -90

//Solution #1 self not satisfied
// function reverseInt(n) {
//    if (n >= 0) {
//     return Number(n.toString().split("").reverse().join(""));
//   } else {
//     return -Number(Math.abs(n).toString().split("").reverse().join(""));
//   }
// }
function reverseInt(n) {
  const rev = n.toString().split("").reverse().join("");
  return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
