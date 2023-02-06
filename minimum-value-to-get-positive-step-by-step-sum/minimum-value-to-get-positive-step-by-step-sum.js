/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = Infinity, sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < min) {
            min = sum;
        }
    }
    if (min <= 0) {
      return -1 * min + 1;   
    } else {
      return 1;
    }
};