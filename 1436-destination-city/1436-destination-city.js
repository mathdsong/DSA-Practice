/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let myset = new Set();
    for (var i = 0; i < paths.length; i++) {
        myset.add(paths[i][0]);
    }

    for (var j = 0; j < paths.length; j++) {
        if (!myset.has(paths[j][1])) {
            return paths[j][1];
        }
    }

};