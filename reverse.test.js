let reverseString = require("./reversestring");

test("hello reverse", () => {
  expect(reverseString("hello")).toBe("olleh");
});
