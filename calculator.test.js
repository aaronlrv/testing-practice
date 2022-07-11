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

test("minus", () => {
  expect(minus(5, 5)).toBe(0);
});

test("minus doesnt take letters", () => {
  expect(minus(5, "c")).toBe("Only input numbers!");
});

test("multiply", () => {
  expect(multiply(5, 5)).toBe(25);
});

test("multiply doesnt take letters", () => {
  expect(multiply(5, "c")).toBe("Only input numbers!");
});

test("divide", () => {
  expect(divide(5, 5)).toBe(1);
});

test("divide doesnt take letters", () => {
  expect(divide(5, "c")).toBe("Only input numbers!");
});

test("divide with 0 gives 0", () => {
  expect(divide(5, 0)).toBe(0);
});
