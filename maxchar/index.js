// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const str = " Hello World!";
const obj = {}; // to store each letter as key value pair;
for (let ch of str) {
  if (!obj[ch]) {
    obj[ch] = 1;
  } else {
    obj[ch]++;
  }
}
console.log(obj);
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (max < charMap[char]) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
