/**
 * @param {number[]} height
 * @return {number}
 */

// 3rd attempt:
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        max = Math.max(area, max);
    }

    return max;

};


// // 2nd attempt attempt even worse (33/61):
// var maxArea = function(height) {
//     let left = 0, right = height.length - 1;
//     let max = 0;

//     while (left < right) {
//         let area1 = (right - left) * Math.min(height[left], height[right]);
//         let area2 = (right - (left + 1)) * Math.min(height[left + 1], height[right]);
//         let area3 = ((right - 1) - left) * Math.min(height[left], height[right - 1]);


//         if (Math.max(area1, area2, area3) === area1) {
//             left++;
//             right--;
//         } else if (Math.max(area1, area2, area3) === area2) {
//             left++;
//         } else {
//             right--;
//         }

//         max = Math.max(max, area1, area2, area3);
//     }

//     return max;
// }


// //brute force: 1st attempt 55/61:
// var maxArea = function(height) {
//     let left = 0;
//     let max = 0;

//     while (left < height.length - 1) {
//         for (right = left + 1; right <= height.length - 1; right++) {
//             let area = (right - left) * Math.min(height[left], height[right]);
//             if (area > max) {
//                 max = area;
//             }
//         }
//         left++;
//     }

//     return max;

// };