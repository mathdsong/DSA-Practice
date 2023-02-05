/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 3rd attempt:
var minSubArrayLen = function(target, nums) {
    let left = 0, curr_sum = 0, min_length = Infinity;
    
    for (var right = 0; right < nums.length; right++) {
        curr_sum += nums[right];
        while (curr_sum >= target) {
            min_length = Math.min(min_length, right - left + 1);
            curr_sum -= nums[left];
            left++;
        }
    }

    if (min_length === Infinity) {
        return 0;
    }

    return min_length;
    
};


// // 2nd attempt:
// var minSubArrayLen = function(target, nums) {
//     let left = 0, right = 0, curr_sum = 0, min_length = nums.length, total_sum = 0;
//     for (var i = 0; i < nums.length; i++) {
//         total_sum += nums[i];
//     }

//     if (total_sum < target) {
//         return 0;
//     }

//     while (right < nums.length) {
//         if (curr_sum < target) {
//             curr_sum += nums[right];
//             right++;
//         } else if (curr_sum >= target) {
//             curr_sum -= nums[left];
//             left++;
//         }
//         min_length = Math.min(min_length, right - left + 1);
//     }

//     return min_length;
    
// };



// 1st attempt: 17/20:
// var minSubArrayLen = function(target, nums) {
//     let left = 0, right = nums.length - 1, curr_sum = 0, min_length = 0;

//     for (var i = 0; i < nums.length; i++) {
//         curr_sum += nums[i];
//     }

//     if (curr_sum < target) {
//         return 0;
//     } else {
//         while (left <= right && curr_sum >= target) {
//             if (curr_sum > target) {
//                 if (nums[left] < nums[right]) {
//                     curr_sum -= nums[left];
//                     left++;
//                 } else {
//                     curr_sum -= nums[right];
//                     right--;
//                 }
//             } else if (curr_sum === target) {
//                 if (nums[left] === 0) {
//                     left++;
//                 } else if (nums[right] === 0) {
//                     right--;
//                 } else {
//                     min_length = right - left + 1;
//                     break;
//                 }
//             } else {
//                 min_length = right - left + 2;
//                 break;
//             }
//         }
//     }

//     return min_length;
// };