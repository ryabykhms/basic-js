const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const isUndefined = (v) => v === undefined;
const isString = (v) => typeof v === "string";
const isZero = (v) => +v === 0;
const isPositive = (v) => Math.sign(v) === 1;
const isActivityInBound = (v) => +v < MODERN_ACTIVITY;

module.exports = function dateSample(sampleActivity) {
  if (
    isUndefined(sampleActivity) ||
    !isString(sampleActivity) ||
    isZero(sampleActivity) ||
    Number.isNaN(sampleActivity) ||
    !isFinite(sampleActivity) ||
    !isPositive(sampleActivity) ||
    !isActivityInBound(sampleActivity)
  ) {
    return false;
  }

  const n0n = MODERN_ACTIVITY / +sampleActivity;
  const rateConstant = 0.693 / HALF_LIFE_PERIOD;
  const fullLifePeriod = Math.ceil(Math.log(n0n) / rateConstant);

  return fullLifePeriod;
};
