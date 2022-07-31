//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any oder.

//Example 1:
//Input: nums = [2,7,11,15] target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 0, we return [0,1].

//Example 2:
//Input: nums = [3,2,4] target = 6
//Output: [1,2]

//Example 3:
//Input: nums = [3,3] target = 6
//Output: [0,1]

//Come up with an algorithym that is less than O(n^2) time complexity.

const twoSum = (nums, target) => {
    //make a map, maps are great key, value objects. we can store the value and index
    const partners = new Map();
    for (let i = 0; i < nums.length; i++) {
        // for each number passed, check if the partners map has a number that equals the target - nums[i]
        if (partners.has(target - nums[i])) {
            //if so, return that numbers index and the current index
            return [partners.get(target-nums[i]),i]
        } else {
            //else save that number and its index
            partners.set(nums[i], i);
        }
    }
}