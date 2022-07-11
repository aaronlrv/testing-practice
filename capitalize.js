function capitalize(string) {
  let capitalLetter = string.charAt(0);
  let word = capitalLetter.toUpperCase() + string.slice(1);
  console.log(word);
  return word;
}

module.exports = capitalize;
