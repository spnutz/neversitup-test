/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */

const manipulate = (text) => {
  const arr = text.split("");
  const output = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [text];

  for (let i = 0; i < arr.length; i++) {
    const currItem = arr[i];
    const remain = arr.slice(0, i).concat(arr.slice(i + 1));
    const permutations = manipulate(remain.join(""));

    for (let item of permutations) {
      output.push(currItem + item);
    }
  }
  return output;
};

module.exports = {
  manipulate,
};
