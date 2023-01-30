/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0, right = 0, cnt = 0;
    while (right < nums.length) {
        if (nums[left] < k) {
            cnt++;
            let currProd = nums[left];
            while (currProd < k) {
                right++;
                currProd *= nums[right];
                if (currProd < k) {
                    cnt++;
                }
            }
        }
        left++;
        right = left;
    }
    return cnt;
};