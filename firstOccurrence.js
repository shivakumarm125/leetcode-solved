// Find the Index of the First Occurrence in a String

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


var strStr = function(haystack, needle) { 
    let needleLength = needle.length;

    for(let point = 0; point <haystack.length; point++){
        let value = haystack.substring(point, point + needleLength)
        if(needle == value){
            return point
        }
    }
    return -1;
};