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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Handle the base case(s), usually an empty tree (node = null) is a base case.
    // Do some logic for the current node
    // Recursively call on the current node's children
    // Return the answer
    if (!root) {
        return false;
    }
    targetSum -= root.val;
    if (!root.left && !root.right) {
        return targetSum === 0;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};