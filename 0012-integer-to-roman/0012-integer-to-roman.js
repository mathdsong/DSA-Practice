/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let map = new Map(), res = '', length = String(num).length;

    map.set(1, "I").set(5, "V").set(10, "X").set(50, "L").set(100, "C").set(500, "D").set(1000, "M").set(4, "IV").set(9, "IX").set(40, "XL").set(90, "XC").set(400, "CD").set(900, "CM");

    while (length > 0) {
        let digit = Math.floor(num / 10**(length - 1));
        if (digit < 4) {
            res += map.get(10**(length-1)).repeat(digit);
        } else if (digit === 4 || digit === 5 || digit === 9) {
            res += map.get(digit*10**(length-1));
        } else {
            res += map.get(5*10**(length-1)) + map.get(10**(length-1)).repeat(digit-5);
        }
        num = num % 10**(length - 1);
        length--;
    }

    return res;



};