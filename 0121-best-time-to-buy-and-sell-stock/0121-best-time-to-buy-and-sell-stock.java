class Solution {
    public int maxProfit(int[] prices) {
        int valley = 0;
        int peak = 1;
        int max_profit = 0;

        while (peak < prices.length) {
            if (prices[peak] > prices[valley]) {
                max_profit = Math.max(prices[peak] - prices[valley], max_profit);
            } else {
                valley = peak;
            }
            peak++;
        }

        return max_profit;
    }
}