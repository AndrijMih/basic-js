const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  let isDouble = false;
  let isDiscard = false;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[0] === '--discard-prev' ||
      i === 0 && arr[0] === '--double-prev' ||
      i === arr.length - 1 && arr[arr.length - 1] === '--discard-next' ||
      i === arr.length - 1 && arr[arr.length - 1] === '--double-next') {
      continue;
    }

    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] !== '--discard-next') {
        newArr.pop();
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 2] !== '--discard-next') {
        newArr.push(arr[i - 1]);
      }

    } else if (arr[i] === '--discard-next') {
      isDiscard = true;
    } else if (arr[i] === '--double-next') {
      isDouble = true;
    } else {
      if (isDouble) {
        newArr.push(arr[i], arr[i]);
        isDouble = false;
      } else if (isDiscard) {
        isDiscard = false;
      } else {
        newArr.push((arr[i]));
      }
    }

  }

  return newArr;


};