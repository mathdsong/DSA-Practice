/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let subSum = new Map(), sum = res = 0;
    subSum.set(0, 1);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2) {
            sum += 1;
        }
        subSum.set(sum, (subSum.get(sum) || 0) + 1 );
    }
    for (var key of subSum) {
        if (subSum.has(key[0] - k)) {
            res += key[1] * subSum.get(key[0] - k);
        }
    }
    return res;
};
