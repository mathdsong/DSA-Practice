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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // The inverse of an empty tree is the empty tree. The inverse of a tree with root r, and subtrees right and left, 
    // is a tree with root r, whose right subtree is the inverse of left, and whose left subtree is the inverse of right.
    if (!root) {
        return null;
    }
    let temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;
    return root;
};