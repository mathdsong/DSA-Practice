/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [], map = new Map();
    
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
    }
    
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j])) {
            if (map.get(nums2[j]) > 0) {
                result.push(nums2[j]);
                map.set(nums2[j], map.get(nums2[j]) - 1);
            }
        }
    }

    return result;
};