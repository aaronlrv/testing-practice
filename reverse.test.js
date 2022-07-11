let reverseString = require("./reversestring");

test("hello reverse", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse with capital", () => {
  expect(reverseString("Howdy")).toBe("ydwoH");
});
