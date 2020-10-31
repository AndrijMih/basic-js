const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {

}) {
  let arrStr = [];
  let arrAddition = [];
  let newStr = '';

  if (String(options.addition) === 'undefined') {
    options.addition = '';
  }

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAddition.push(String(options.addition));
    }
    newStr = `${String(str)}${arrAddition.join(options.additionSeparator)}`;
  } else {
    newStr = `${String(str)}${String(options.addition)}`;
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arrStr.push(newStr);
    }
  } else {
    arrStr.push(newStr);
  }
  return arrStr.join(options.separator);


};