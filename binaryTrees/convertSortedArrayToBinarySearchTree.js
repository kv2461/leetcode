// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

var sortedArrayToBST = (nums) => {
    //base cases
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;

    //create a new TreeNode(center)
    let centerIndex = Math.floor(nums.length/2);
    let root = new TreeNode(nums[centerIndex]);

    //set left node to center of left subtree
    let leftSubtree = nums.slice(0,centerIndex);
    root.left = sortedArrayToBST(leftSubtree);

    //set right node to center of right subtree
    let rightSubtree = nums.slice(centerIndex+1, nums.length);
    root.right = sortedArrayToBST(rightSubtree);

    return root;
}