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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  // if (root.left) {
  //   root.left = removeLeafNodes(root.left, target);
  // }
  // if (root.right) {
  //   root.right = removeLeafNodes(root.right, target);
  // }
  // if (!root.left & !root.right) {
  //   if (root.val === target) {
  //     return null;
  //   }
  // }
  // return root;

  let dfs = (node, value) => {
    node.left ? node.left = dfs(node.left, value) : null;
    node.right ? node.right = dfs(node.right, value) : null;   
    if (!node.left && !node.right) {
      if (node.val === value) {
        return null;
      }
    }
    return node;
  }
    return dfs(root, target);
};