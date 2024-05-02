// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution 1
// function capitalize(str) {
//     let newStr = str.split('');
//     let result= [];
//     result.push(str[0].toUpperCase());
//     // console.log(newStr);
//     for(let i = 1; i< newStr.length;i++){
//         result.push(newStr[i])
//         if(newStr[i] === " "){
//           result.push(newStr[i+1].toUpperCase());
//           newStr.splice(newStr[i+1],1);
//         // console.log(result)
//         }
//     }
//     return result.join('');
// }

//solution #2
// function capitalize(str) {
//     const words = [];
//     for( let word of str.split(" ")){
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     words.join(' ');
// return words;
// }

// solution #3
function capitalize(str) {
  const result = str[0].toUpperCase();
  for (let i = 1; i < newStr.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
