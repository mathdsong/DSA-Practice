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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];  
    let helper = (x, y) => {
        let arr = [];
        let dfs = (node, sum) => {
            if (!node) {
                return;
            }
            sum += node.val;
                arr.push(node.val);
            if (node.left && node.right) {
                let temp = arr, copy = temp.slice(0);
                dfs(node.left, sum);
                arr = copy;
                dfs(node.right, sum);
            } else if (!node.left && !node.right) {
                if (sum === targetSum) {
                    res.push(arr);
                }
            } else {
                dfs(node.left, sum);
                dfs(node.right, sum);
            }
        }
        dfs(x, y);
    }
    helper(root, 0);
    return res;
};