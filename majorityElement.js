// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums) {
    let numsObj = {}; //initialize empty Obj
    let maxFreq = 0;
    let maxElement = null;
    for (let num of nums) {
        numsObj[num] = numsObj[num] + 1 || 1; //for each element you see, create a key with a value of 1, unless you’ve seen it before, in which case, just add 1 to its value.
    }
    for (num in numsObj) { //see which num is higher than maxFreq, and make that maxFreq if its higher
        if (numsObj[num] > maxFreq) {
        maxFreq = numsObj[num];
        maxElement = parseInt(num);
        }
    }
  return maxElement;
};