/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */


var reverseBetween = function(head, left, right) {
    let lead = head, count = 1, start = head;
    while (count < left) {
        lead = start;
        start = start.next;
        count++;
    }

    let curr = start, prev = null;

    while (count <= right) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        count++;
    }
    lead.next = prev;
    start.next = curr;

    return left === 1 ? prev : head;
    
    
};