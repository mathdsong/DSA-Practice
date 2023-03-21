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
var maxAncestorDiff = function(root) {
    let res = -Infinity;
    let dfs = (node, max, min) => {
        if (!node) {
            return 0;
        }
        if (node.val > max) {
            max = node.val;
        }
        if (node.val < min) {
            min = node.val;
        }
        if (!node.left && !node.right) {
            res = Math.max(res, max - min);
        }
        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
    dfs(root, -Infinity, Infinity);
    return res;
};