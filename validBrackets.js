var isValid = function (s) {
  const stack = [];
  const bracketMap = { "(": ")", "{": "}", "[": "]" };

  for (let char of s) {
    if (bracketMap[char]) {
      stack.push(char);
    } else if (bracketMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("([])[]")); // Output: true
console.log(isValid("[]")); // Output: true
console.log(isValid("(]")); // Output: false
