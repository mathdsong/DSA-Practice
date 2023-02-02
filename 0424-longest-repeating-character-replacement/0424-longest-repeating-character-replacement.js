/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var base_set = new Set(s.split('')), max_length = 0;
    for (let key of base_set) {
        // purpose: Find the length of the longest substrings that contains at most k "non_key"s
        let left = 0, non_key_count = 0;
        for (var right = 0; right < s.length; right++) {
            if (s[right] !== key) {
                non_key_count++;
            }
            while (non_key_count === k+1) {
                if (s[left] !== key) {
                    non_key_count--;
                }
                left++;
            }
            max_length = Math.max(max_length, right - left + 1);
        }
    }

    return max_length;
};