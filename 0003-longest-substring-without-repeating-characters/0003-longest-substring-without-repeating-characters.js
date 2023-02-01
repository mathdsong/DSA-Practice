/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, currStr = ''; res = 0;
    for (let right = 0; right < s.length; right++) {
        if (!currStr.includes(s[right])) {
            currStr += s[right];
            res = Math.max(res, currStr.length);
        } else {
            res = Math.max(res, currStr.length);
            while (s[left] !== s[right] && left < right) {
                left++;
            }
            currStr = '';
            left++;
            right = left - 1;
        }
        
    }
    return res;
};