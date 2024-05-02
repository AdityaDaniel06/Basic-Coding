// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const word = "Hi THEer!!!";
word.replace(/[^\w]/g, "").toLowerCase();
console.log(word);

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let frequencyCounter1 = {}; // to collect values and it's frequency
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        // does square exists in obj 2
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        // chwcks if there are two 4
        return false;
      }
    }
    return true;
  }
}

// Solution +#
// function anagrams(stringA, stringB) {
//   let charMapA = buildCharMap(stringA);
//   let charMapB = buildCharMap(stringB);
//   // Number of keys in obj
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   } else {
//     for (let char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   let chMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     chMap[char] = (chMap[char] || 0) + 1;
//   }
//   return chMap;
// }

///////////////////////////
// Solution #2
function anagram(stringA, stringB) {
 return cleanString(stringA) === cleanString(stringB);

}
function cleanString(str) {
  return  str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
