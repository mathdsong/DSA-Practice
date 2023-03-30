/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    let f_leaf = (node) => {
        let res = [];
        let dfs = (x) => {
            if (!x) {
                return;
            }
            if (!x.left && !x.right) {
                res.push(x.val);
                return;
            }
            dfs(x.left);
            dfs(x.right);
        }
        dfs(node);
        return res;
    }

    if (JSON.stringify(f_leaf(root1)) === JSON.stringify(f_leaf(root2))) {
        return true;
    } else {
        return false;
    }
    
};