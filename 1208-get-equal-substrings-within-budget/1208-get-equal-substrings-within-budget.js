/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0, curr = 0, res = 0;
    for (var right = 0; right < s.length; right++) {
        curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        while (curr > maxCost) {
            curr -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};  