/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], result = [];
    for (var i = 0; i < temperatures.length; i++) {
        while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
            result[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }
    for (var j = 0; j < temperatures.length; j++) {
        if (!result[j]) {
            result[j] = 0;
        }
    }
    return result;
};