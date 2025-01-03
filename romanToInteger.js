var romanToInt = function (s) {
  // Object mapping Roman numerals to their integer values
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Variable to store the result
  let result = 0;

  // Iterate through the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    // Get the integer value of the current numeral
    const currentNumeral = romanNumerals[s[i]];

    // Get the integer value of the next numeral (if exists)
    const nextNumeral = romanNumerals[s[i + 1]];

    // Check if the next numeral is greater than the current numeral
    // This is done because IV = 4 not 1+5, so we are subtracting and skipping a      number
    if (nextNumeral && currentNumeral < nextNumeral) {
      // If true, subtract the current numeral from the next numeral
      result += nextNumeral - currentNumeral;
      // Skip the next numeral, as it has already been considered
      i++;
    } else {
      // If not a special case, add the current numeral to the result
      result += currentNumeral;
    }
  }

  // Rturn the final result
  return result;
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
