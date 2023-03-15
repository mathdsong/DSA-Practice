/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let queue = [], hashmap = new Map(), res = [];
    for (var i = 0; i < nums2.length; i++) {       
        while (queue.length && queue[queue.length - 1] < nums2[i]) {
            hashmap.set(queue[queue.length - 1], nums2[i]);
            queue.pop();
        }
        if (queue[queue.length - 1] >= nums2[i]) {
            hashmap.set(queue[queue.length - 1], -1);
        }
        queue.push(nums2[i]); 
    }
    hashmap.set(nums2[nums2.length - 1], -1);

    for (var j = 0; j < nums1.length; j++) {
        res.push(hashmap.get(nums1[j]));
    }
    return res;
};