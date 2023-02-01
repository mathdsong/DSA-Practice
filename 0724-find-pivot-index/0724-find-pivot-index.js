/**
 * @param {number[]} nums
 * @return {number}
 */

// 2nd working solution:
var pivotIndex = function(nums) {
    var sum = 0;
    var leftSum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (0 === sum - nums[0]) {
        return 0;
    } else {
        for (var i = 0; i < nums.length - 1; i++) {
            leftSum += nums[i];
            if (leftSum === sum - leftSum - nums[i + 1]) {
                return i + 1;
            }
        }
        return -1;
    }
}







// 1st working solution:
// var pivotIndex = function(nums) {
//     var cnt = nums[0];
//     var subSumArr = [cnt];
//     var subSumArr2 = [];
//     for (var i = 1; i < nums.length; i++) {
//         cnt += nums[i]
//         subSumArr.push(cnt);
//     }

//     var all = subSumArr[nums.length - 1];

//     for (var i = 0; i < subSumArr.length; i++) {
//         subSumArr2.push(all - subSumArr[i]);
//     }
    
//     if (subSumArr2[0] === 0) {
//         return 0;
//     } else {
//         for (var i = 0; i < subSumArr.length; i++) {
//             if (subSumArr[i] === subSumArr2[i + 1]) {
//                 return i + 1;
//             }
//         }
//         return -1;
//     }
// };


// // [1, 8, 11, 17, 22, 28]
// // [27, 20, 17, 11, 6, 0]