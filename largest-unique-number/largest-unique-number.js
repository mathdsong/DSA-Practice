/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let hashmap = new Map(), max = -1;
    for (var i = 0; i < nums.length; i++) {
        hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1);
    }
    for (let key of hashmap) {
        if (key[0] > max && key[1] === 1) {
            max = key[0];
        }
    }
    
    return max;
};