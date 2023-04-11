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
var longestZigZag = function(root) {
    let pathLength = 0;
    let dfs = (node, goLeft, steps) => {
        if (!node) {
            return;
        }
        if (goLeft) {
            dfs(node.left, false, steps + 1);
            dfs(node.right, true, 1)
        } else {
            dfs(node.right, true, steps + 1);
            dfs(node.left, false, 1);
        }
        pathLength = Math.max(pathLength, steps);
    }
    dfs(root, false, 0);
    dfs(root, true, 0);
    return pathLength;
    
};