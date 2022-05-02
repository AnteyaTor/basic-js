const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {let stradd="";
  if (options.addition==undefined&&options.separator==undefined) {
    return (str+="+").repeat(options.repeatTimes).slice(0, -1)}
    if (options.addition==undefined) {
      return (str+=options.separator).repeat(options.repeatTimes).slice(0, -(options.separator.length))}
 
if (options.additionSeparator==undefined) { 
      return ((str+options.addition)+options.separator).repeat(options.repeatTimes).slice(0, -(options.separator.length))
      }
if (options.additionRepeatTimes==undefined)      {return 'TESTstrADD!'}
if (typeof str!=="string") {
  stradd+=((String(options.addition))+options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length) );
  return (((str||+str)+stradd)+String(options.separator)).repeat(options.repeatTimes).slice(0, -(options.separator.length))}
  
else {
 stradd+=(String(options.addition)+options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length) );}
return ((str+stradd)+options.separator).repeat(options.repeatTimes).slice(0, -(options.separator.length))}

module.exports = {
  repeater
};
