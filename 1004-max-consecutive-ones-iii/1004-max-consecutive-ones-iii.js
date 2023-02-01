/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // what is the longest subarray that contains at most k "0"s?
    let left = 0, zeroCnt = 0, maxLength = 0;

    for (var right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCnt++;
        }
        
        while (zeroCnt === k + 1) {
            if (nums[left] === 0) {
                zeroCnt--;
            }
            left++;
        }
        
        maxLength = Math.max(right - left + 1, maxLength);
    }
    
    return maxLength;
    
};