const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length === 0 || typeof sampleActivity !== 'string') {
    return false;
  }
  let numericSampleActivity = parseFloat(sampleActivity);
  if (isNaN(numericSampleActivity) || numericSampleActivity < 1 || numericSampleActivity > 15) {
    return false;
  }
  let age = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / numericSampleActivity)) / Math.LN2);
  return age;
};