/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else {
        let str = String(x);
        let arr = str.split('');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
};