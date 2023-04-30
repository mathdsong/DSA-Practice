/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let hashset1 = new Set(), hashset2 = new Set(), count = 0, arr = [];
    for (let i = 0; i < A.length; i++) {
        hashset1.add(A[i]);
        hashset2.add(B[i]);
        hashset1.has(B[i]) && B[i] !== A[i] ? count++ : B[i] === A[i] ? count++ : null;
        hashset2.has(A[i]) && B[i] !== A[i] ? count++ : null;
        arr.push(count);
    }
    
    return arr;
};