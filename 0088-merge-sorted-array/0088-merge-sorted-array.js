/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // initialize two pointers for two arrays resp
    let p1 = 0, p2 = 0; 
    // loop through nums2:
    while (p2 < nums2.length) {
        // if the current number in nums1 is smaller than the current number in nums2, then there are two cases:
        while (nums1[p1] < nums2[p2]) {
            // case 1: if hitting the last number of nums1 that should be merged with value 0:
            if (nums1[p1] === 0 && p1 >= m + p2) {
                // then we just reassign the rest of 0s left in nums1 by the rest of nums2 resp, afterwards, jump out of the program
                for (let i = p1; i < nums1.length; i++) {
                    nums1[p1] = nums2[p2];
                    p1++;
                    p2++;
                }
                break;
            }
            // case 2: 
            p1++;
        }
        // if the current number in nums1 is greater than or equal to the current number in nums2
        // then insert this current number in nums2 to nums1 at the index of the current number in nums1
        nums1.splice(p1, 0, nums2[p2]);
        nums1.pop();
        p2++;
        p1++;

    }

};