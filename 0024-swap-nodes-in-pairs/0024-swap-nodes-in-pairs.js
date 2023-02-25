/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head && head.next) {
        let dummy = head.next;
        while (head && head.next) {
            let prev = head;
            let nextNode = head.next.next;
            head.next.next = head;
            head.next = nextNode;
            head = nextNode;
            if (head && head.next) {
                prev.next = head.next;
            }
        }
        return dummy;
    } else {
        return head;
    }
};