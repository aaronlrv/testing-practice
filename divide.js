function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Only input numbers!";
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return a / b;
}

module.exports = divide;
