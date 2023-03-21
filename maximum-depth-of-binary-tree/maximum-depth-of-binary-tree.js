/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

[3], depth += 1, depth = 1 return max (left depth, right depth)

left [9] depth += 1, depth = 2
[9] has no children, return 2

right [20, 15, 7] depth = 1 + 1 = 2, return max (left depth, right depth)
  left [15] depth = 2 + 1 = 3, has no children, return 3
  right [7] depth = 2 + 1 = 3, has no children, return 3
  max (left depth, right depth)

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