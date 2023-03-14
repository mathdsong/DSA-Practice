/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let increasing_queue = [], decreasing_queue = [];
    let left = 0, right = 0, result = 0;
    while (right < nums.length) {
        while (increasing_queue.length && increasing_queue[increasing_queue.length - 1] > nums[right]) {
            increasing_queue.pop();
        }
        increasing_queue.push(nums[right]);
        while (decreasing_queue.length && decreasing_queue[decreasing_queue.length - 1] < nums[right]) {
            decreasing_queue.pop();
        }
        decreasing_queue.push(nums[right]);

        while (decreasing_queue[0] - increasing_queue[0] > limit) {
            if (decreasing_queue[0] === nums[left]) {
                decreasing_queue.shift();
            }
            if (increasing_queue[0] === nums[left]) {
                increasing_queue.shift();
            }
            left++;
        }
        result = Math.max(result, right - left + 1);
        right++;
    }
    return result;
};