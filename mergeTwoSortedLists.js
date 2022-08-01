// 21. Merge Two Sorted Lists


// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var mergeTwoLists = function(L1, L2) {
        // create new linked list pointer
    var L3 = new ListNode(null, null);
    var prev = L3;
    
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
      if (L1.val <= L2.val) { 
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
    }
    
    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }
    
    // return the sorted linked list
    return L3.next;
};