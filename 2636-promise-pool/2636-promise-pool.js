/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    let functionIndex = 0, inProgress = 0;
    return new Promise((resolve) => {
        let helper = () => {
            if (functionIndex === functions.length && inProgress === 0) {
                resolve();
            }

            while (functionIndex < functions.length && inProgress < n) {
                inProgress++;
                let promise = functions[functionIndex]();
                functionIndex++;

                promise
                .then(() => {
                    inProgress--;
                    helper();
                })
            }
        }
        helper();
    })
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */