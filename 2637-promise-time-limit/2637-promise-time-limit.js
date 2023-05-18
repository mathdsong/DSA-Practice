/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// https://stackoverflow.com/questions/32461271/nodejs-timeout-a-promise-if-failed-to-complete-in-time
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve, reject) => {

            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
            .then(res => {
                clearTimeout(timeout);
                resolve(res);
            })
            .catch(err => reject(err));
            
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */