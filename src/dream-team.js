const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  let dream = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }
    dream = dream + members[i].trim().toUpperCase()[0];
  }
  return dream.split('').sort().join('');

};