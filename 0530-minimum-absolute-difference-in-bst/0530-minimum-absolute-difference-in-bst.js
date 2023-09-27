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

// helper function that calculates the max value of the BST
let getMaxValOfBST = function(node) {
    let max = 0;
    if (node.left === null && node.right === null) {
        max = Math.max(max, node.val);
    } else if (node.left === null && node.right !== null) {
        max = Math.max(max, node.val, getMaxValOfBST(node.right));
    } else if (node.right === null && node.left !== null) {
        max = Math.max(max, node.val, getMaxValOfBST(node.left));
    } else {
        max = Math.max(max, node.val, getMaxValOfBST(node.left), getMaxValOfBST(node.right));
    }
    return max;
}

// helper function that calculates the min value of the BST
let getMinValOfBST = function(node) {
    let min = Infinity;
    if (node.left === null && node.right === null) {
        min = Math.min(min, node.val);
    } else if (node.left === null && node.right !== null) {
        min = Math.min(min, node.val, getMinValOfBST(node.right));
    } else if (node.right === null && node.left !== null) {
        min = Math.min(min, node.val, getMinValOfBST(node.left));
    } else {
        min = Math.min(min, node.val, getMinValOfBST(node.left), getMinValOfBST(node.right));
    }
    return min;  
}

// main function
var getMinimumDifference = function(root) {
    let result;
    // recursively go through each node to get the minimum of (the minimum of (curr - max of left subtree) and (min of right subtree - curr))

    if (root.left === null && root.right === null) {
        result = Infinity;
    } else if (root.left === null && root.right !== null) {
        result =  Math.min(getMinValOfBST(root.right) - root.val, getMinimumDifference(root.right));
    } else if (root.right === null && root.left !== null) {
        result =  Math.min(root.val - getMaxValOfBST(root.left), getMinimumDifference(root.left));
    } else if (root.right !== null && root.left !==null) {
        result =  Math.min(root.val - getMaxValOfBST(root.left), getMinValOfBST(root.right) - root.val, getMinimumDifference(root.left), getMinimumDifference(root.right));
    } 

    return result;
};