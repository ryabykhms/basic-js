const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const s = String(str);
  const defaultOptions = {
    separator: "+",
    additionSeparator: "|",
  };

  const opts = Object.assign(defaultOptions, options);
  const addition = opts.addition !== undefined ? opts.addition : "";
  let additionStr = s + addition;
  if (
    opts["additionRepeatTimes"] !== undefined ||
    +opts["additionRepeatTimes"] > 0
  ) {
    additionStr =
      s +
      addition +
      (opts.additionSeparator + addition).repeat(opts.additionRepeatTimes - 1);
  }
  let resultStr = s + addition;
  if (opts["repeatTimes"] !== undefined || +opts["repeatTimes"] > 0) {
    resultStr =
      additionStr + (opts.separator + additionStr).repeat(opts.repeatTimes - 1);
  }

  return resultStr;
};
