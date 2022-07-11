let capitalize = require("./capitalize");

test("capitalizes string", () => {
  expect(capitalize("hi")).toBe("Hi");
});
