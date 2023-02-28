/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    
    for (const c of s) {
        if (c !== stack[stack.length - 1]) {
            stack.push(c);
        } else {
            stack.pop();
        }
    }
    return stack.join('')
};