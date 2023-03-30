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
var diameterOfBinaryTree = function(root) {
    let max = -Infinity;

    let maxLengthOfTheNode = (node, depth) => {
        if (!node) {
            return 0;
        }
        if (!node.left && !node.right) {
            return depth;
        }
        depth++;
        return Math.max(maxLengthOfTheNode(node.left, depth), maxLengthOfTheNode(node.right, depth));
    }

    let dfs = (node) => {
        if (!node) {
            return 0;
        }
        let curr;    
        if (!node.left && !node.right) {
            curr = maxLengthOfTheNode(node.left, 0) + maxLengthOfTheNode(node.right, 0);
        } else if (!node.left && node.right || node.left && !node.right) {
            curr = maxLengthOfTheNode(node.left, 0) + maxLengthOfTheNode(node.right, 0) + 1;
        } else {
            curr = maxLengthOfTheNode(node.left, 0) + maxLengthOfTheNode(node.right, 0) + 2;
        }

        if (curr > max) {
            max = curr;
        }
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    return max;
};