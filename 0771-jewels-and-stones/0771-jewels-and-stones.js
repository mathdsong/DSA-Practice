/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let setjew = new Set(jewels), stonemap = new Map(), res = 0;
    for (const stone of stones) {
        stonemap.set(stone, (stonemap.get(stone) || 0) + 1);
    }
    
    for (const key of stonemap.keys()) {
        if (setjew.has(key)) {
            res += stonemap.get(key);
        }
    }

    return res;
};