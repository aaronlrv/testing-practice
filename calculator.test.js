let add = require("./add");
let minus = require("./minus");
let multiply = require("./multiply");
let divide = require("./divide");

test("add", () => {
  expect(add(5, 5)).toBe(10);
});
