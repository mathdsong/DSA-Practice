/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    for (let i = 2; i < coordinates.length; i++) {
        let cSlope = (coordinates[0][1] - coordinates[i][1]) / (coordinates[0][0] - coordinates[i][0]);
        if ( cSlope !== slope) {
            if (Math.abs(cSlope) === Infinity && Math.abs(slope) !== Infinity || Math.abs(cSlope) !== Infinity && Math.abs(slope) === Infinity || Math.abs(cSlope) !== Infinity && Math.abs(slope) !== Infinity) {
                return false;
            }
        }
    } 
    return true;
};