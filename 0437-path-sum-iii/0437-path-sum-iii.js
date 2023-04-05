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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let res = 0, hashmap = new Map();
    hashmap.set(0, 1);
    let dfs = (node, sum) => {
        if (!node) {
            return;
        }
        sum += node.val;
        if (hashmap.has(sum - targetSum)) {
            res += hashmap.get(sum - targetSum);
        }
        !hashmap.has(sum) ? hashmap.set(sum, 1) : hashmap.set(sum, hashmap.get(sum) + 1);
        if (node.left && node.right) {
            let copy = new Map(hashmap);
            dfs(node.left, sum);
            hashmap = copy;
            dfs(node.right, sum);
        } else {
            dfs(node.left, sum);
            dfs(node.right, sum);
        }
    }
    dfs(root, 0);
    return res;
};