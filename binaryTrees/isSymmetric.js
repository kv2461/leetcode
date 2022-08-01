// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

var isSymmetric = (root) => {
    var isMirrorTree = (p,q) => {
        //check if both trees are empty
        if (p == null && q == null) {
            return true;
        }
        //if only one is empty
        else if ((p == null && q != null) || (p != null && q == null)){
            return false;
        }

        //check if curuent data of both trees equal and cursively check for left and right mirrors
        else {
            return (p.val == q.val && isMirrorTree(p.left,q.right) && isMirrorTree(p.right, q.left));
        }
    }
    return (isMirrorTree(root.left, root.right));
}