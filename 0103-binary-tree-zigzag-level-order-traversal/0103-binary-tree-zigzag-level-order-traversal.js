/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let queue = [root], res = [], count = 0;
    while (queue.length) {
        let nextQueue = [], arr = [];
        count++;
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            node !== null ? arr.push(node.val) : null;
            if (node && node.left) {
                nextQueue.push(node.left);
            }
            if (node && node.right) {
                nextQueue.push(node.right);
            }
        }

        if (count % 2 === 1) {
            res.push(arr);
        } else {
            let newarr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                newarr.push(arr[i]);
            }
            res.push(newarr);
        }
        queue = nextQueue;
    }
    return res[0].length !== 0 ? res : res[0];
};