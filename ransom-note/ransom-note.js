/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashr = new Map(), hashm = new Map();
    for (var i = 0; i < ransomNote.length; i++) {
        hashr.set(ransomNote[i], (hashr.get(ransomNote[i]) || 0) + 1);
    }
    for (var j = 0; j < magazine.length; j++) {
        hashm.set(magazine[j], (hashm.get(magazine[j]) || 0) + 1);
    }
    
    console.log(hashr, hashm)
    
    for (const key of hashr.keys()) {
        if (!hashm.has(key) || hashm.get(key) < hashr.get(key)) {
            return false;
        }
    }
    return true;
    
};