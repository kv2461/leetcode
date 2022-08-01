// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 
// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

var maxDepth = (root) => {
    //if the last root, return 0
    if (root === null) return 0;
    // else return the higher number of either the maxDepth of root.left/root.right and add 1 to it.
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}