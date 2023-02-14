/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let hashmap = new Map(), max = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        let temp = nums[i], copy = temp, sum = 0;
        while (copy > 0) {
            sum += copy - Math.floor(copy / 10) * 10;
            copy = Math.floor(copy / 10);
        }
        
        if (hashmap.has(sum)) {
            hashmap.get(sum).push(nums[i]);
        } else {
            hashmap.set(sum, [nums[i]]);
        }
    }
    
    for (const each of hashmap.values()) {
        each.sort((a, b) => b - a);

        if (max < each[0] + each[1]) {
            max = each[0] + each[1];
        }
    }

    return max === -Infinity ? -1 : max;
};