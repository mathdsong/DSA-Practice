/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0, right = 0, cnt = 0, currProd;
    while (right < nums.length) {
        if (nums[left] < k) {
            currProd = nums[left];
            while (currProd < k) {
                cnt++;
                right++;
                currProd *= nums[right];
            }
        }
        left++;
        right = left;
    }
    return cnt;
};