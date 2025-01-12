function noOfOccurence(str) {
  let map = {}; // Use an object instead of a Map

  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 0;
    }
    map[str[i]] += 1;
  }

  return map; // Return the object directly
}

console.log(noOfOccurence("apple")); // Output: { a: 1, p: 2, l: 1, e: 1 }
