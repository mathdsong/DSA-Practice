/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = new Map(), res = [];
    for (var i = 0; i < strs.length; i++) {
        // console.log(strs[i].split('').sort().join('')); // faster
        // console.log([...strs[i]].sort((a, b) => a.localeCompare(b)).join("")); // slower
        let sorted = strs[i].split('').sort().join('')
        if (hashmap.get(sorted)) {
            hashmap.get(sorted).push(strs[i]);
        } else {
            hashmap.set(sorted, [strs[i]]);
        }
    }

    for (const each of hashmap.values()) {
        res.push(each);
    }

    return res;

};