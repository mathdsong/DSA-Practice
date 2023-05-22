/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// https://stackoverflow.com/questions/32461271/nodejs-timeout-a-promise-if-failed-to-complete-in-time
var timeLimit = function(fn, t) {
	return async function(...args) {

        return new Promise((resolve, reject) => {

            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
            .then(resolve)
            .catch(reject)
            .finally(() => clearTimeout(timeoutId))
        })

    }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#examples

// const myFirstPromise = new Promise((resolve, reject) => {
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML API.
//   setTimeout(() => {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 250);
// });

// myFirstPromise.then((successMessage) => {
//   // successMessage is whatever we passed in the resolve(...) function above.
//   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//   console.log(`Yay! ${successMessage}`);
// });


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */