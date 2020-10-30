const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, depthArray = [], depth = 1) {
    depthArray.push(depth);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr.flat(), depthArray, ++depth);

        break;
      }
    }
    return Math.max(...depthArray);
  }


};