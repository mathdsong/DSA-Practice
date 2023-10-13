/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let p1 = 0, p2 = 0, count = 0, map = new Map();
    while (p2 < nums.length) {
        if (p1 === p2) {
            // if hit freq 2:
            if (map.get(nums[p1]) === 2) {
                // find the first p2 that p2's > p1's
                while (nums[p1] === nums[p2]) {
                    p2++;
                }
            } else {
                // if the freq of p1's (the same as p2's) < 2
                map.set(nums[p1], map.get(nums[p1]) + 1 || 1);
                count++;
                p1++;
                p2++;
            }
        } else {
            if (map.get(nums[p2]) === 2) {
                // if p2's freq hit 2 already, we keep moving forward
                p2++;
            } else {
                // if not, update the map, switch p1's and p2's if having different values, update count and keep moving forward
                map.set(nums[p2], map.get(nums[p2]) + 1 || 1);
                if (nums[p1] !== nums[p2]) {
                    [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
                }
                count++;
                p1++;
                p2++;
            }
        }
    }

    return count;
};