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
// // DFS:
// var rightSideView = function(root) {
    
// };


//BFS:
var rightSideView = function(root) {
    let queue = [root], res = [];
    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [];

        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];

            if (node) {
                if (i === nodesInCurrentLevel - 1) {
                    res.push(node.val);
                }

                if (node.left) {
                    nextQueue.push(node.left);
                }
                if (node.right) {
                    nextQueue.push(node.right);
                }
            }

        }

        queue = nextQueue;
    }
    return res;
};