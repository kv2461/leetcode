// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var inorderTraversal = function(root) {
    let stack = [];
    let result = [];

    //while loop is dependent on either nonempty root or nonempty stack
    while (root !== null || stack.length !== 0) {
        //while root isn't empty push root to stack and update root to be root.left 
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        //when root is empty but stack.length isn't (root.left was empty)
        //take out most recent stack addition and make it root
        root = stack.pop();
        //push the root val into result and make root root.right. if root.right is null it will re run this loop
        result.push(root.val);
        root = root.right;
    }

    return result;
}