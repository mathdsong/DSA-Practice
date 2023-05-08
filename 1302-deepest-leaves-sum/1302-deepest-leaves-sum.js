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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let queue = [root], res = 0;
    while (queue.length) {
      let nextQueue = [], sum = 0;
      for (let i = 0; i < queue.length; i++) {
        let node = queue[i];
        sum += node.val;
        if (node.left) {
          nextQueue.push(node.left);
        }
        if (node.right) {
          nextQueue.push(node.right);
        }
      }
      queue = nextQueue;
      res = sum;
    }
    return res;
};