/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let res = [], hashmap = new Map();
    for (var i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (var j = 0; j < row.length; j++) {
            let length = 1;
            while (Math.abs(row[j]) >= 10) {
                length++;
                row[j] > 0 ? row[j] = Math.floor(row[j] / 10) : row[j] = Math.ceil(row[j] / 10);
            }
            if (row[j] < 0) {
                length++;
            }
            !hashmap.has(j) ? hashmap.set(j, length) : hashmap.set(j, Math.max(length, hashmap.get(j)));
        }
    }
    
    for (const each of hashmap) {
        res.push(each[1]);
    }
    
    return res;
};