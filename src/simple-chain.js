const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length && typeof position === 'number') {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('Error');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = chainMaker;