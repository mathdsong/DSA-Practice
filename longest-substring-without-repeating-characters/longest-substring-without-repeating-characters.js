/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    let curr = new Set();

    while (right < s.length) {
        while (!curr.has(s[right])) {
            curr.add(s[right]);
            max = Math.max(max, right - left);
            right++;
        }

        if (right < s.length === false) {
            break;
        }
        max = Math.max(max, right - left);
        // console.log("right - left: ", right, "-", left, "=", max);
        curr.delete(s[left]);
        left++;
        // console.log("right = ", right, "right < s.length is ", right < s.length);

    }
    return max;
};