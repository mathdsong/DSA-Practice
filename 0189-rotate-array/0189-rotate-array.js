/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 3rd:

var rotate = function(nums, k) {
    k = k % nums.length;
    
    for (var i = 0; i < nums.length / 2; i++) {
        [nums[i], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[i]];
    }

    for (var j = 0; j < k / 2; j++) {
        [nums[j], nums[k - 1 - j]] = [nums[k - 1 - j], nums[j]];
    }

    for (var h = k; h < (k + nums.length - 1) / 2; h++) {
        [nums[h], nums[k + nums.length - 1 - h]] = [nums[k + nums.length - 1 - h], nums[h]]
    }
}




// // 2nd 21/38:
// var rotate = function(nums, k) {

//     let [i, temp] = [0, k];

//     if (nums.length === 2 && k % 2 === 1) {
//         [nums[0], nums[1]] = [nums[1], nums[0]];
//     }


//     if (nums.length > 2 && k !== nums.length) {

//         k = k % nums.length;

//         while (i < (nums.length - k) / 2) {
//             [nums[i], nums[nums.length - k - 1 - i]] = [nums[nums.length - k - 1 - i], nums[i]];
//             i++;
//         }

//         for (var j = nums.length - k; j < (2 * nums.length - k - 1) / 2; j++) {
//             [nums[j], nums[2 * nums.length - k - 1 - j]] = [nums[2 * nums.length - k - 1 - j], nums[j]];
//         }

//         while (k > 0) {
//             [nums[k - 1], nums[nums.length - k]] = [nums[nums.length - k], nums[k - 1]];
//             k--;
//         }

//         for (var h = temp; h < (nums.length - 1) / 2; h++) {
//             [nums[h], nums[nums.length - 1 - h]] = [nums[nums.length - 1 - h], nums[h]];
//         }

//     }
// }

// // 1st: 37/38
// var rotate = function(nums, k) {
//     let j = nums.length - 1;
//     while (k > 0) {
//         nums.unshift(nums[j]);
//         nums.pop();
//         k--;
//     }
// };