/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let p1 = 0, p2 = 1, curr_max = 0, sum_diff = 0;
    while (p2 < prices.length) {
        if (prices[p2] - prices[p1] < curr_max) {
            p1 = p2;
            p2++;
            curr_max = 0;
        }
        while (prices[p2] - prices[p1] >= curr_max) {
            curr_max = prices[p2] - prices[p1];
            p2++;
        }
        sum_diff += curr_max;
    }
    return sum_diff;
};