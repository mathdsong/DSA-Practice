/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowmap = new Map(), colmap = new Map(), res = 0;

    
    for (var row = 0; row < grid.length; row++) {
        let rowStr = grid[row].join(' ');
        rowmap.set(rowStr, (rowmap.get(rowStr) || 0) + 1);
    }


    for (var col = 0; col < grid.length; col++) {
        let colStr = '';
        for (var row = 0; row < grid.length; row++) {
            row < grid.length - 1 ? colStr += grid[row][col] + ' ' : colStr += grid[row][col];
        }
        colmap.set(colStr, (colmap.get(colStr) || 0) + 1);
    }

    for (const key of rowmap.keys()) {
        if (colmap.has(key)) {
            res += colmap.get(key) * rowmap.get(key);
        }
    }

    return res;
    
};