/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0, curr_sum = 0, max_length = 0;
    for (var right = 0; right < s.length; right++) {
        curr_sum += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        while (curr_sum > maxCost) {
            curr_sum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        max_length = Math.max(max_length, right - left + 1);
    }

    return max_length;
};