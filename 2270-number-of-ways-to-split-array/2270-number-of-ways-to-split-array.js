/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [nums[0]], count = 0;
    for (var i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    for (var j = 0; j < prefix.length - 1; j++) {
        if (prefix[j] >= prefix[prefix.length - 1] - prefix[j]) {
            count++;
        }
    }

    return count;
};