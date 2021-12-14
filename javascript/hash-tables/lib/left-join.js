"use strict";

module.exports = (hash1, hash2) => {
  if (hash1 === null) return null;
  const outputs = [];
  const hash1Keys = hash1.keys();
  const hash1Values = [];
  const hash2Values = [];

  for (let i = 0; i < hash1Keys.length; i++) {
    hash1Values.push(hash1.get(hash1Keys[i]));
  }

  for (let i = 0; i < hash1Keys.length; i++) {
    if (hash2.get(hash1Keys[i]) !== undefined) {
      hash2Values.push(hash1.get(hash1Keys[i]));
    } else {
      hash2Values.push(null);
    }
  }
  for (let i = 0; i < hash1Keys.length; i++) {
    outputs.push([hash1Keys[i], hash1Values[i], hash2Values[i]]);
  }
  return outputs;
};
