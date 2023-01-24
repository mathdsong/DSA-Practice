/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = '', str = '';
    for (var i = 0; i < s.length; i++) {

        while (s[i]) {
            str += s[i];
            i++;
            if (s[i] === ' ') {
                break;
            }
        }

        for (var j = str.length - 1; j >= 0; j--) {
            res += str[j];
            if (j === 0 && i < s.length - 1) {
                res += ' ';
            }
        }

        str = '';
    }

    return res;
};