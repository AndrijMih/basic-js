const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turnSpeedSec = turnsSpeed / 3600;
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor(result.turns / turnSpeedSec);

  return result;


};