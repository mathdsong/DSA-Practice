/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let res = {}
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i]) in res) {
            res[fn(this[i])].push(this[i]);
        } else {
            res[fn(this[i])] = [this[i]];
        }
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */