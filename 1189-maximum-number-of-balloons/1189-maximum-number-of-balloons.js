/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hashmap = new Map(), hashset = new Set(['b', 'a', 'l', 'o', 'n']), min = Infinity;
    
    for (var i = 0; i < text.length; i++) {
        if (hashset.has(text[i])) {
            hashmap.set(text[i], (hashmap.get(text[i]) || 0) + 1);
        }
    }
    
    for (const key of hashmap) {
        if (key[1] < min) {
            min = key[1];
        }
    }
    
    if (hashmap.size < 5) {
        return 0;
    }
    
    for (const key of hashmap) {
        if (key[0] === 'l' || key[0] === 'o') {
            if (key[1] < 2 * min) {
                return Math.min(Math.floor(hashmap.get('l')/2), Math.floor(hashmap.get('o')/2));
            }
        }
    }
    
    return min;
};