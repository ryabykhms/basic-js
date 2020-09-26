const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_BY_HOUR = 3600;
  const turns = 2 ** disksNumber - 1;
  const turnsSpeedBySecond = turnsSpeed / SECONDS_BY_HOUR;
  const seconds = Math.floor(turns / turnsSpeedBySecond);
  return {
    turns,
    seconds,
  };
};
