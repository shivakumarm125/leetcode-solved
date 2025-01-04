var removeOuterParentheses = function (s) {
  var result = "";
  var opened = 0;

  for (let char of s) {
    if (char === "(") {
      if (opened > 0) {
        result += "(";
      }
      opened++;
    } else {
      opened--;
      if (opened > 0) {
        result += ")";
      }
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())")); //()()()
console.log(removeOuterParentheses("(()())(())(()(()))")); //()()()()(())
