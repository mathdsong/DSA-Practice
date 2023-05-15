/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried() {
        if (arguments.length >= fn.length) {
            return fn(...arguments);
        } else {
            return (...nextArgs) => curried(...arguments, ...nextArgs);
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
