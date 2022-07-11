function minus(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Only input numbers!";
  }

  return a - b;
}

module.exports = minus;
