/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let myset = new Set(nums);
    for (var i = 0; i <= nums.length; i++) {
        if (!myset.has(i)) {
            return i;
        }
    }
};