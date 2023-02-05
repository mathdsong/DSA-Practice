/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    var obj = {}, res = [];
    for (var i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    // let sorted = Object.keys(obj).map(key => [key, obj[key]]).sort((a, b) => b[1] - a[1]);
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (var i = 0; i < k; i++) {
        res.push(sorted[i][0]);
    }

    return res;
};


// var topKFrequent = function(nums, k) {
//     var obj = {}, res = [];
//     for (var i = 0; i < nums.length; i++) {
//         if (Object.keys(obj).includes(nums[i].toString())) {
//             obj[nums[i]]++;
//         } else {
//             obj[nums[i]] = 1;
//         }
//     }

//     let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//     for (var i = 0; i < k; i++) {
//         res.push(sorted[i][0]);
//     }

//     return res;
// };

