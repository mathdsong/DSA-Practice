/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = [], result = [];
    for (var i = 0; i < nums.length; i++) {
        if (queue.length) {
            while (i - queue[0] > k - 1) {
                queue.shift();
            }
            while (nums[i] > nums[queue[queue.length - 1]]) {
                queue.pop();
            }
            queue.push(i);
            if (i >= k - 1) {
                result.push(nums[queue[0]]);
            }
        } else {
            queue.push(i);
            if (k === 1) {
                result.push(nums[queue[0]]);
            }
        }
    }
    return result;
};