/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let hashmap = new Map(), res = [[], []];
    for (var i = 0; i < matches.length; i++) {
        let arr = matches[i];
        !hashmap.has(arr[0]) ? hashmap.set(arr[0], 0) : null;
        !hashmap.has(arr[1]) ? hashmap.set(arr[1], -1) : hashmap.set(arr[1], hashmap.get(arr[1]) - 1);
    }
    
    for (const key of hashmap) {
        if (key[1] === 0) {
            res[0].push(key[0]);
        } else if (key[1] === -1) {
            res[1].push(key[0]);
        }
    }
    
    res[0].sort((a, b) => a - b);
    res[1].sort((a, b) => a - b);
    
    return res;
};