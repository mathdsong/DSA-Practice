/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//2nd method: using linked list + two-pointer:
// var detectCycle = function(head) {
    
// }



// 1st method: using hash set:
var detectCycle = function(head) {
    let myset = new Set();
    let cur = head;
    while (cur) {
        if (myset.has(cur)) {
            return cur;
        } else {
            myset.add(cur);
        }
        cur = cur.next;
    }
    return null;
};