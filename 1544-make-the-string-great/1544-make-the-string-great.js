/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    for (const c of s) {
        if (stack.length > 0 && stack[stack.length - 1] !== c) {
            if (stack[stack.length - 1].toUpperCase() === c || stack[stack.length - 1].toLowerCase() === c) {
             stack.pop();   
            } else {
                stack.push(c);
            }
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};