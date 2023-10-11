/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    while (p2 < nums2.length) {
        while (nums1[p1] < nums2[p2]) {
            // if we just hit the 1st 0 that doesn't belong to the "should be merged subset of nums1", then replace all left 0s by the remaining numbers of nums2
            if (p1 === m + p2) {
                for (let i = p2; i < nums2.length; i++) {
                    nums1[p1] = nums2[i];
                    p1++;
                }
                break;
            }
            // otherwise, increase p1 by 1
            p1++;
        }
        // once the current number in nums1 >= nums2's, then insert nums2's number into the p1's position
        // remove the last 0 from nums1 to keep the same length as we just inserted, p1 -> p1 + 1, p2 -> p2 + 1
        nums1.splice(p1, 0, nums2[p2]);
        nums1.pop();
        p1++;
        p2++;
    }
};