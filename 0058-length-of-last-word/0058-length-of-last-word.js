/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].length) {
            return arr[i].length;
        }
    }
};