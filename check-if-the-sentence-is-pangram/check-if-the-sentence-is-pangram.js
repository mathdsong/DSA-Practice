/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let dic = new Set();
    for (let i = 0; i < sentence.length; i++) {
        if (!dic.has(sentence[i])) {
            dic.add(sentence[i]);
        }
    }
    
    if (dic.size === 26) {
        return true;
    }
    
    return false;
    
};