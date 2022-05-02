const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let n = str.length;
  let str2="";
  for (let i = 0; i < n; i++)
  {
      let count = 1;
      while (i < n - 1 && str[i] == str[i+1])
      {
          count++;
          i++;
      }
      if (count==1) {str2+=(str[i])};
     if (count>1) {str2+=(count+str[i])};
      
  }
  return str2;
}

module.exports = {
  encodeLine
};
