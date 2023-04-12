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
var maxProduct = function(root) {
    let mySet = new Set(), max = -Infinity;
    let treeSum = (node) => {
        if (!node) {
            return 0;
        }

        let sumOfSumTreeOfNode = node.val + treeSum(node.left) + treeSum(node.right);
        !mySet.has(sumOfSumTreeOfNode) ? mySet.add(sumOfSumTreeOfNode) : null;
        return sumOfSumTreeOfNode;
    }

    let totalSum = treeSum(root);
    // console.log(mySet);

    mySet.forEach(each => {
        max = Math.max(max, (totalSum - each) * each);
    })
    return max % (10 ** 9 + 7);
}

//1. 52/54 Time Limit Exceeded:
// var maxProduct = function(root) {
//     let max = -Infinity;
//     let treeSum = (node) => {
//         if (!node) {
//             return 0;
//         }
//         if (!node.left && !node.right) {
//             return node.val;
//         }
//         return node.val + treeSum(node.left) + treeSum(node.right);
//     }

//     let total = treeSum(root, 0);

//     let dfs = (node) => {
//         if (!node) {
//             return;
//         }
//         max = Math.max(max, (total - treeSum(node)) * treeSum(node));
//         dfs(node.left);
//         dfs(node.right);
//         return max;
//     }

//     return dfs(root) % 1000000007;
// };