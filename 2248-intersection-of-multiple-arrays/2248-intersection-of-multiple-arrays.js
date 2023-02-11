/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let counts = new Map(), res = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums[i].length; j++) {
            counts.set(nums[i][j], (counts.get(nums[i][j]) || 0) + 1);
        }
    }
    for (let key of counts) {
        if (key[1] === nums.length) {
            res.push(key[0]);
        }
    }

    return res.sort((a, b) => a - b);
};