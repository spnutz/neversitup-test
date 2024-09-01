/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2]
 * @returns {number} one number that odd number
 */
const findOddNumber = (numbers) => {
  const mapNumber = numbers.reduce((map, number) => {
    if (!map.has(number)) {
      map.set(number, { count: 1 });
    } else {
      map.get(number).count += 1;
    }
    return map;
  }, new Map());

  for (let [key, value] of mapNumber) {
    if (value.count % 2 !== 0) return key;
  }
};

module.exports = {
  findOddNumber,
};
