/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let decreasing_queue = nums.slice(0, k).sort((a, b) => b - a);
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > decreasing_queue[decreasing_queue.length - 1]) {
            decreasing_queue.pop();
            let ind = 0;
            while (decreasing_queue[ind] > nums[i]) {
                ind++;
            }
            decreasing_queue.splice(ind, 0, nums[i]);
        }
    }
    
    return decreasing_queue[decreasing_queue.length - 1];
};