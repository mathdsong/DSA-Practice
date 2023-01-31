/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currkSum = 0;
    for (let i = 0; i < k; i++) {
        currkSum += nums[i];
    }

    let maxkSum = currkSum;
    for (let i = k; i < nums.length; i++) {
        currkSum += nums[i] - nums[i - k];
        maxkSum = Math.max(maxkSum, currkSum);
    }
    
    return maxkSum/k;
};