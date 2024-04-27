// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Review solution #1
// function palindrome(str) {
//     let rev = '';
//     for( let s of str){
//         rev = s + rev;
//     }
//     if( rev === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// Solution #2
// function palindrome(str) {
//   let rev = str.split(" ").reduce((acc, ele) => acc += ele," ");
//   if (rev === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
