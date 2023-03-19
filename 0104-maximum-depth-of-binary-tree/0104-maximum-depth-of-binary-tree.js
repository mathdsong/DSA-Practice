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
var maxDepth = function(root) {
    let max = 1;
    let dfs = (node, depth) => {
        if (!node) {
            return 0;
        }
        depth++;
        if (!node.left && !node.right) {
            return depth;
        }
        let left = dfs(node.left, depth);
        let right = dfs(node.right, depth);
        max = Math.max(left, right);
        return max;
    }
    return dfs(root, 0);
};