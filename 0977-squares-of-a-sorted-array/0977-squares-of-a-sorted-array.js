/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 1st working solution but not optimal:
var sortedSquares = function(nums) {
    
    var negSqr = [];
    var nonNegSqr = [];
    let result = [];
    let j = 0, k = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negSqr.unshift(nums[i]*nums[i]);
        } else {
            nonNegSqr.push(nums[i]*nums[i]);
        }
    }
    
    while (j < negSqr.length && k < nonNegSqr.length) {
        if (negSqr[j] < nonNegSqr[k]) {
            result.push(negSqr[j]);
            j++;
        } else {
            result.push(nonNegSqr[k]);
            k++;
        }
    }
    
    while (j < negSqr.length) {
        result.push(negSqr[j]);
        j++;
    }
    
    while(k < nonNegSqr.length) {
        result.push(nonNegSqr[k]);
        k++;
    }
    
    return result;
};



// // 2nd working solution(even worse):
// var sortedSquares = function(nums) {
//     let res = [];
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (right !== left) {
//         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//             res.unshift(nums[left]*nums[left]);
//             left++;
//         } else {
//             res.unshift(nums[right]*nums[right]);
//             right--;
//         }
//     }
    
//     res.unshift(nums[right]*nums[right]);
//     return res;
// };