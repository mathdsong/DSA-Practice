/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    } else {
    // reverse the last half of x, and then check if it is the same as the first half
        let reverseOfLastHalf = 0;
        while (x > reverseOfLastHalf) {
           reverseOfLastHalf = reverseOfLastHalf * 10 + x % 10;
           x = Math.floor(x / 10);
        }

        if (x === reverseOfLastHalf || x === Math.floor(reverseOfLastHalf / 10)) {
            return true;
        } else {
            return false;
        }
    }
};