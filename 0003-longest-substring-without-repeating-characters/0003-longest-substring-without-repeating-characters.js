/**
 * @param {string} s
 * @return {number}
 */
// 2nd solution:
var lengthOfLongestSubstring = function(s) {
    let left = 0, max = 0, hashmap = new Map();
    for (var right = 0; right < s.length; right++) {
        if (hashmap.has(s[right])) {
            if (hashmap.get(s[right]) < left) {
                max = Math.max(max, right - left + 1);
            } else {
                max = Math.max(max, right - left);
                left = hashmap.get(s[right]) + 1;
            }
        } else {
            max = Math.max(max, right - left + 1);
        }
        hashmap.set(s[right], right);
    }
    console.log(hashmap)
    return max;
}

















// 1st solution:
// var lengthOfLongestSubstring = function(s) {
//     let left = 0, currStr = ''; res = 0;
//     for (let right = 0; right < s.length; right++) {
//         if (!currStr.includes(s[right])) {
//             currStr += s[right];
//             res = Math.max(res, currStr.length);
//         } else {
//             res = Math.max(res, currStr.length);
//             while (s[left] !== s[right] && left < right) {
//                 left++;
//             }
//             currStr = '';
//             left++;
//             right = left - 1;
//         }
        
//     }
//     return res;
// };