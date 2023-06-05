/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let scope = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    for (let i = 2; i < coordinates.length; i++) {
        if ((coordinates[0][1] - coordinates[i][1]) / (coordinates[0][0] - coordinates[i][0]) !== scope) {
            return (coordinates[0][1] - coordinates[i][1]) / (coordinates[0][0] - coordinates[i][0]) !== Infinity ? false : null;
        }
    } 
    return true;
};