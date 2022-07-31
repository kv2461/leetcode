// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = (strs) => {
    // if array is empty return empty string
    if (!strs || strs.length === 0) {
        return '';
    }

    //find shortest word after sorting
    let sortedStrs = strs.sort((a,b) => a.length - b.length);

    let shortestString = sortedStrs[0];

    //while every word in the strs array DOES NOT equal shortestString, take a letter off each iteration
    //only return if shortestString is '', so no matches, or when every word DOES equal shortestString
    while (!strs.every((string) => string.startsWith(shortestString))) {
        if (shortestString.length === 0) return;

        shortestString = shortestString.slice(0,-1);
    }

    return shortestString;
}