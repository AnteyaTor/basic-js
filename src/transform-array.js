const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (arr===[]) {return []}
  let Arr=arr
 if (Array.isArray(arr)===false) {throw new Error ("'arr' parameter must be an instance of the Array!");}
 else {
  if (arr.includes("--double-next")) {Arr.splice(arr.indexOf("--double-next"), 1, Arr[arr.indexOf("--double-next")+1])}
  if (arr.includes("--double-prev")) {Arr.splice(arr.indexOf("--double-prev"), 1, Arr[arr.indexOf("--double-prev")-1])}
  if (arr.includes("--discard-next")) { Arr.splice(arr.indexOf("--discard-next"), 2,)}
  if (arr.includes("--discard-prev")) { Arr.splice(arr.indexOf(("--discard-prev")-1), 2,)}
}
return Arr
}

module.exports = {
  transform
};
