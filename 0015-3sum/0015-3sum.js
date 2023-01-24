/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 2nd attempt:
// nums[i] + nums[j] = -nums[k]
var threeSum = function(nums) {

    let res = new Set();
    let arrRes = [];

    nums.sort((a, b) => (a - b));

    for (var k = 0; k < nums.length; k++) {
        
        let target = -1 * nums[k];
        let i = 0, j = nums.length - 1;

        while (i < j) {
            let twoSum = nums[i] + nums[j];
            if (twoSum === target) {
                if (i !== k && j !== k && !res.has(JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => (a - b))))) {
                    res.add(JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => (a - b))));            
                } else if (i === k) {
                    i++;
                } else {
                    j--;
                }
            } else if (twoSum < target) {
                i++;
            } else {
                j--;
            }
        }

    }

    res.forEach(element => {
        arrRes.push(JSON.parse(element));
    })
    
    return arrRes;
};



// // 1st attempt which is working for 308/312 test cases:
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
//                 } else if (i === k) {
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