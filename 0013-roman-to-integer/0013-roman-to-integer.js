/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let map = new Map(), res = 0;

    map.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000).set("IV", 4).set("IX", 9).set("XL", 40).set("XC", 90).set("CD", 400).set("CM", 900);

    for (let i = 0; i < s.length; i++) {
        if (map.has(s.slice(i, i+2))) {
            res += map.get(s.slice(i, i+2));
            i++;
        } else {
            res += map.get(s[i]);
        }
    }
    
    return res;
    
};