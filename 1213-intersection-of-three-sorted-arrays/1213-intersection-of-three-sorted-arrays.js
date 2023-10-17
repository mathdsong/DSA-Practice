/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    
    let intersection = (array1, array2) => {
        let p1 = 0, p2 = 0, result = [];
        while (p1 < array1.length && p2 < array2.length) {
            if (array1[p1] === array2[p2]) {
                result.push(array1[p1]);
                p1++;
                p2++;
            } else if (array1[p1] < array2[p2]) {
                p1++;
            } else {
                p2++;
            }
        }
        return result;
    }
    return intersection(arr3, intersection(arr1, arr2));
};