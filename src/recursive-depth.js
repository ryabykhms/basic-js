const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let c = 0;
    if (Array.isArray(arr) && arr.length === 0) {
      return 1;
    }
    arr.forEach((el) => {
      let count = 1;
      if (Array.isArray(el)) {
        count += this.calculateDepth(el);
      }
      c = Math.max(c, count);
    });
    return c;
  }
};
