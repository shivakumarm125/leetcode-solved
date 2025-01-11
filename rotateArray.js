function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
  }

  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 2)); //OP [4,5,1,2,3]
