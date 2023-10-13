/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let p1 = 0, p2 = 0, count = 0, hashset = new Set();
    while (p2 < nums.length) {
        // jump out until p2 points to the number that is larger than p1's
        while (nums[p1] === nums[p2]) {
            if (!hashset.has(nums[p1])) {
                hashset.add(nums[p1]);
                count++;
            }
            p2++;
        }
        // once p2's > p1's, we will update the position next to the current p1's (aka, (p1+1)'s) by switching p2's and (p1+1)'s 
        if (nums[p1] < nums[p2]) {
            p1++;
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            hashset.add(nums[p1]);
            count++;
            p2++;
        }

    }

    return count;
};