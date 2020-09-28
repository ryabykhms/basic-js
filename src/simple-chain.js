const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const val = value === undefined ? " " : ` ${value} `;
    this.chain =
      this.chain.length === 0 ? `(${val})` : `${this.chain}~~(${val})`;
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position) || position % 1 !== 0) {
      this.chain = "";
      throw new Error("Error! Invalid position!");
    }
    const tempArr = this.chain.split("~~");
    tempArr.splice(position - 1, 1);
    this.chain = tempArr.join("~~");
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const lastChain = this.chain;
    this.chain = "";
    return lastChain;
  },
};

module.exports = chainMaker;
