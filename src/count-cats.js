const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((count, line) => count + line.reduce((sum, current) => (current === "^^" ? ++sum : sum), 0), 0);
};