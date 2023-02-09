/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let myset = new Set(arr), res = 0;
    for (var i = 0; i < arr.length; i++) {
        if (myset.has(arr[i] + 1)) {
            res++;
        }
    }
    
    return res;
};