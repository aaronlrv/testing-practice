let add = require("./add");
let minus = require("./minus");
let multiply = require("./multiply");
let divide = require("./divide");

test("add", () => {
  expect(add(5, 5)).toBe(10);
});

test("add doesnt take letters", () => {
  expect(add(5, "c")).toBe("Only input numbers!");
});
