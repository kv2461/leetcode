// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

var isBalanced = (root) => {
    //recursive function to return height
    var checkHeight = (node) => {
        //checks if node is null
        if (node === null) return 0;
        
        const left = checkHeight(node.left);
        const right = checkHeight(node.right);

        //first break of conditional happens if difference between left and right node is greater than 1. recursively will return false after
        if (left === false || right === false || Math.abs(left-right) > 1 ) {
            return false;
        }

        return Math.max(left,right) + 1;
    };

    if (root === null) {
        return true;
    } else {
        return checkHeight(root);
    }
}