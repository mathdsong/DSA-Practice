/**
 * @param {Function} fn
 */
function memoize(fn) {
    let myMap = new Map();
    return function(...args) {
        if (!myMap.has(JSON.stringify(args))) {
            let result = fn(...args);
            myMap.set(JSON.stringify(args), result);
            return result;
        } else {
            return myMap.get(JSON.stringify(args));
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */