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
 * @return {number[]}
 */
var largestValues = function(root) {
    let queue = [root], res = [];
    while (queue[0]) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [], max = queue[0].val;


        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];

            if (node) {
                if (node.val > max) {
                    max = node.val;
                }

                if (node.left) {
                    nextQueue.push(node.left);
                }
                if (node.right) {
                    nextQueue.push(node.right);
                }
            }

        }

        res.push(max);
        queue = nextQueue;
    }

    return res;
};