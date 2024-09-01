const { countSmilyFace } = require("./smily"); // ปรับตามชื่อไฟล์ของคุณ

describe("countSmileyFace function", () => {
  test("should return 0 when no smiley faces are present", () => {
    expect(countSmilyFace([])).toBe(0);
    expect(countSmilyFace(["", ";(", ":>", ":}"])).toBe(0);
  });

  test("should return the correct count of smiley faces", () => {
    expect(countSmilyFace([":)", ";(", ";}", ":-D"])).toBe(2);
    expect(countSmilyFace([";D", ":-(", ":-)", ";~)"])).toBe(3);
    expect(countSmilyFace([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });

  test("should correctly identify smiley faces without a nose", () => {
    expect(countSmilyFace([":)", ":D", ";)", ";D"])).toBe(4);
  });

  test("should correctly identify smiley faces with a nose", () => {
    expect(countSmilyFace([":-)", ":~D", ";-D", ";~)"])).toBe(4);
  });
});
