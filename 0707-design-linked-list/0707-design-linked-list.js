// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    } else {
        let cur = this.head;
        for (var i = 0; i < index; i++) {
            cur.next ? cur = cur.next : cur = cur;
        }
        return cur.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let added = new ListNode(val);
    added.next = this.head;
    this.head = added;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.head) {
        this.addAtHead(val);
    } else {
        let added = new ListNode(val);
        let cur = this.head;
        for (var i = 0; i < this.size - 1; i++) {
            cur.next ? cur = cur.next : cur = cur;
        }
        cur.next = added;
        this.size++;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === this.size) {
        this.addAtTail(val);
    } else if (index > this.size) {
        return -1;
    } else if (index === 0) {
        this.addAtHead(val);
    } else {
        let added = new ListNode(val), cur = this.head;
        for (var i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        let nextNode = cur.next;
        cur.next = added;
        added.next = nextNode;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    } else if (index === 0) {
        this.head = this.head.next;
    } else {
        let cur = this.head;
        for (var i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */