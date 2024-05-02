// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let subArr = [];
  let i = 0;
  while (i < array.length) {
    subArr.push(array.slice(i, i + size));
    i += size;
  }
  return subArr;
}

module.exports = chunk;

// Solution #1
// function chunk(arr, size) {
// let chunkedArray = [];

// for (let el of arr) {
//   const last = chunkedArray[chunkedArray.length - 1]; to get the last element of the array

//   if (!last || last.length === size) {
//     chunkedArray.push([el]);
//   } else {
//     last.push(el);
//   }
// }
// return chunked;
// }
