//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.
    
//Example 1:
//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    //if x is negative OR x isn't 0 AND a multiple of 10 .. return false
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;
    let reverse = 0;
    //for loop where i = x, run while i is bigger than 0, and update by moving the decimal point to the left by one digit
    for (let i = x; i > 0; i = Math.floor(i/10)) {
        reverse = reverse * 10 + i % 10;
        //reverse updates by multiplying itself  by 10 and adding the ones digit of i.
        //example - for 13431... 
        //reverse = 0,
        //i = 13431 => reverse = (0 + 1) = 1
        //i = 1341 => reverse = (10 + 3) = 13
        //i = 134 => reverse = (130 + 4) = 134
        //i = 13 => reverse = (1340 + 3) = 1343
        //i = 1 => reverse = (13431) = 13431
    }
    //return bool of x === reverse 
    // i x = 13431, reverse = 13431, returns true
    return x === reverse;
}