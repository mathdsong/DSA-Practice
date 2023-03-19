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
    let dfs = (node, depth) => {
        if (!node) {
            return 0;
        }
        depth++;
        if (!node.left && !node.right) {
            return depth;
        }
        return Math.max(dfs(node.left, depth), dfs(node.right, depth));
    }
    return dfs(root, 0);
};