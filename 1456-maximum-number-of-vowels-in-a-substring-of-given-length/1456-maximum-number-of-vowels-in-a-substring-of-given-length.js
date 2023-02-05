/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    var vowel_set = new Set(['a', 'e', 'i', 'o', 'u']);
    let curr_size = 0, max_cnt = 0;
    for (var i = 0; i < k; i++) {
        if (vowel_set.has(s[i])) {
            curr_size++;
        }
    }

    max_cnt = curr_size;

    for (var i = k; i < s.length; i++) {
        if (vowel_set.has(s[i - k])) {
            curr_size--;
        }
        if (vowel_set.has(s[i])) {
            curr_size++;
        }

        max_cnt = Math.max(max_cnt, curr_size);
    }

    return max_cnt;
};