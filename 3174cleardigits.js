// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.


var clearDigits = function(s) {
    var stack = [];
    for(let char of s){
        if(/\d/.test(char)){
            if(stack.length > 0){
                stack.pop();
            }
        }else {
            stack.push(char)
        }
    }

    return stack.join("")
};


console.log(clearDigits("ab45")); // ""
console.log(clearDigits("abc")); // abc

