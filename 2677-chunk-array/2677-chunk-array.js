/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let res = new Array(Math.ceil(arr.length / size));
    for (let i = 0; i < res.length; i++) {
        res[i] = [];
        for (let j = i * size; j < (i + 1) * size; j++) {
            j < arr.length ? res[i].push(arr[j]) : null;
        }
    }
    return res;
};