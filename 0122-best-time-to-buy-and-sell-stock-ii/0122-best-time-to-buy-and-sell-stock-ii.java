class Solution {
    public int maxProfit(int[] prices) {
        int valley = 0;
        int peak = 1;
        int sum_profit = 0;
        int curr_diff = 0;

        while (valley < prices.length & peak < prices.length) {
            int v_p = prices[valley];
            int p_p = prices[peak];

            if (p_p - v_p > curr_diff) {
                curr_diff = p_p - v_p;
            } else {
                sum_profit += curr_diff;
                curr_diff = 0;
                valley = peak;
            }

            peak++;
        }

        if (curr_diff > 0 & peak == prices.length) sum_profit += curr_diff;

        return sum_profit;

    }
}