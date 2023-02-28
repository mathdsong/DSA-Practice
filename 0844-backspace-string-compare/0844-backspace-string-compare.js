/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [], stack2 = [];
    for (const c of s) {
        if (c === '#') {
            stack1.pop();
        } else {
            stack1.push(c);
        }
    }

    for (const c of t) {
        if (c === '#') {
            stack2.pop();
        } else {
            stack2.push(c);
        }
    }

    if (stack1.join("") === stack2.join("")) {
        return true;
    } else {
        return false;
    }
};