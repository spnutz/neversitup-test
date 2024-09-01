/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (faces) => {
  const eyeRule = [":", ";"];
  const noseRule = ["-", "~"];
  const mouthRule = [")", "D"];
  let count = 0;
  if (faces.length === 0) return 0;
  faces.forEach((face) => {
    const saperate = face.split("");
    if (
      (saperate.length === 2 &&
        eyeRule.includes(saperate[0]) &&
        mouthRule.includes(saperate[1])) ||
      (saperate.length === 3 &&
        eyeRule.includes(saperate[0]) &&
        noseRule.includes(saperate[1]) &&
        mouthRule.includes(saperate[2]))
    ) {
      count++;
    }
  });
  return count;
};

module.exports = {
  countSmilyFace,
};
