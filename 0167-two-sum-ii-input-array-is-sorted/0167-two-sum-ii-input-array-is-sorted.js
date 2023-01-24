/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;

    while (i !== j) {
        let sum = numbers[i] + numbers[j];
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            return [i+1, j+1];
        }
    }
};

// // nums[i] + nums[j] = -nums[k]
// var threeSum = function(nums) {
//     let res = [];
//     nums.sort((a, b) => (a - b));

//     for (var k = 0; k < nums.length; k++) {

//         let target = -1 * nums[k];
//         let i = 0, j = nums.length - 1;

//         while (i < j) {
//             let twoSum = nums[i] + nums[j];
//             if (twoSum === target) {
//                 if (i !== k && j !== k && !JSON.stringify(res).includes(JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => (a - b))))) {
//                     res.push([nums[i], nums[j], nums[k]].sort((a, b) => (a - b)));
//                     break;                  
//                 } 
//                 else if (i === k) {
//                     i++;
//                 } else {
//                     j--;
//                 }
//             } else if (twoSum < target) {
//                 i++;
//             } else {
//                 j--;
//             }
//         }

//     }
    
//     return res;
// };
