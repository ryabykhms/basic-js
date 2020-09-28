const CustomError = require("../extensions/custom-error");

const COMMANDS = [
  "--double-next",
  "--double-prev",
  "--discard-next",
  "--discard-prev",
];

const isCommands = (...args) =>
  args.filter((v) => COMMANDS.indexOf(v) !== -1).length === args.length;

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error! Argument is not array!");
  }
  const resultArr = arr.slice();
  resultArr.map((el, i, a) => {
    if (isCommands(el, resultArr[i + 1])) {
      resultArr.splice(i, 2);
    }
    if (isCommands(el, resultArr[i + 1])) {
      resultArr.splice(i - 1, 2);
    }
    switch (el) {
      case "--discard-next":
        if (i < resultArr.length - 1) {
          resultArr.splice(i + 1, 1);
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          resultArr.splice(i - 1, 1);
        }
        break;
      case "--double-next":
        if (i < resultArr.length - 1) {
          resultArr[i] = resultArr[i + 1];
        }
        break;
      case "--double-prev":
        if (i > 0) {
          resultArr[i] = resultArr[i - 1];
        }
        break;
    }
  });

  return resultArr.filter((v) => !isCommands(v));
};
