const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  let i=0;
  let m=String(n);
for (let i=0;m.length>1;i++) {
 m= m.split("").reduce((a,b)=>+Number(a)+Number(b))
 m=String(m)
}
return +m

}

module.exports = {
  getSumOfDigits
};
