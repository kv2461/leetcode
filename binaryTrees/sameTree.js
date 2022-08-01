// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 
var isSameTree = function(p, q) {
    //check if both the trees are empty
    if (p == null && q == null) {
        return true;
        //if only one is null
    } else if ((p == null && q != null) || (p != null && q == null)) {
        return false;
    } else {
        //check if current data of both trees equal and recursively check for left and right subtrees
        return (p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) 
    }
};