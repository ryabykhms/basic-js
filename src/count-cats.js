const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix === undefined || !Array.isArray(matrix)) {
    return false
  }
  return matrix.reduce((count, line) => count + line.reduce((sum, current) => (current === "^^" ? ++sum : sum), 0), 0);
};