const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
  let arr=email.split("").reverse()
  let i= arr.indexOf("@")
  return arr.splice(0,i,"").reverse().join("")
}

module.exports = {
  getEmailDomain
};
