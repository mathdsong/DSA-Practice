/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 2nd attempt: using hash map + prefix sum
var subarraySum = function(nums, k) {
    let hashsubSum = new Map(), sum = res = 0;
    hashsubSum.set(0, 1);
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hashsubSum.has(sum - k)) {
            res += hashsubSum.get(sum - k);
        }
        hashsubSum.set(sum, (hashsubSum.get(sum) || 0) + 1);
    }
    return res;
}




// 1st attempt: 88/93
// var subarraySum = function(nums, k) {
//     let prefix = [nums[0]], res = 0;
//     for (var i = 1; i < nums.length; i++) {
//         prefix.push(prefix[prefix.length - 1] + nums[i]);
//     }

//     for (var i = 0; i < nums.length; i++) {
//         if (prefix[i] === k) {
//                 res++;
//         }
//         for (var j = i + 1; j < nums.length; j++) {
//             if (prefix[j] - prefix[i] === k) {
//                 res++;
//             }
//         }
//     }

//     return res;
// };