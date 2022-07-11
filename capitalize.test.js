let capitalize = require("./capitalize");

test("capitalizes string", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("Cannot capitalize number", () => {
  expect(capitalize(8)).toBe("Cannot capitalize anything thats not a string");
});

test("2 words will still capitalize the first in sentence", () => {
  expect(capitalize("because of")).toBe("Because of");
});
