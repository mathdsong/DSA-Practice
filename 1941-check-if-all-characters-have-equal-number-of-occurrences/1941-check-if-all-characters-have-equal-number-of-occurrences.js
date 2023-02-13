/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let hashmap = new Map();
    for (var i  = 0; i < s.length; i++) {
        hashmap.set(s[i], (hashmap.get(s[i]) || 0) + 1);
    }

    let freq = hashmap.values().next().value;
    for (const key of hashmap) {
        if (key[1] !== freq) {
            return false;
        }
    }
    return true;
};