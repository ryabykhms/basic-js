const CustomError = require("../extensions/custom-error");

const isString = (v) => typeof v === "string";
const isEmptyString = (v) => v.trim().length === 0;
const isStringNumber = (v) => !isNaN(v);

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const filteredMembers = members.filter(
    (m) => isString(m) && !isStringNumber(m) && !isEmptyString(m)
  );
  const firstSymbolMembers = filteredMembers.map((m) =>
    m.trim().toUpperCase().charAt(0)
  );
  const newName = firstSymbolMembers.sort().reduce((prev, current) => {
    return prev + current;
  }, "");

  return newName;
};
