const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let arr=[]
  for (let j=0, i=1;j<String(n).length;i*=10, j++) {
    
    arr.push(Math.floor(n/(i*10))*i+n%i)
  } return +arr.sort((a,b)=>b-a).splice(0,1).join()

  
}

module.exports = {
  deleteDigit
};
