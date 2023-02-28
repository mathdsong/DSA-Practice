/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let split = path.split('/');
    let stack = [];

    for (const str of split) {
        if (str === '') {
            continue;
        } else if (str === '..') {
            stack.pop();
        } else if (str === '.') {
            continue;
        } else {            
            stack.push('/' + str);
        }
    }

    if (stack[0]) {
        if (stack[0] !== '/') {
            return stack.join("");
        }
    } else {
        return '/';
    }
}; 