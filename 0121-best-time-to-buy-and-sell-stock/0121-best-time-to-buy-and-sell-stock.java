class Solution {
    public int maxProfit(int[] prices) {
        int p1 = 0;
        int p2 = 0;
        int max = 0;

        while (p2 < prices.length) {
            // if p2's < p1's, then p1's absolutely can't be the smallest initialization
            if (prices[p2] < prices[p1]) {
                p1 = p2;
                p2++;
            } else {
                // only when p2's > p1's, we can update max
                if (prices[p2] - prices[p1] > max) {
                    max = prices[p2] - prices[p1];
                }
                p2++;
            }

        }

        return max;
    }
}

/*
Example: 
prices = [7,2,5,6,1,3,4]
p1 = p2 = 0, 7 - 7 = 0 == max --> p2++
p1 = 0, p2 = 1, 2 - 7 = -5 < 0 --> p1 = p2, p2++
p1 = 1, p2 = 2, 5 - 2 = 3 > max --> max = 3, p2++
p1 = 1, p2 = 3, 6 - 2 = 4 > max --> max = 4, p2++
p1 = 1, p2 = 4, 1 - 2 < 0 --> p1 = p2, p2++
p1 = 4, p2 = 5, 3 - 1 < max --> p2++
p1 = 4, p2 = 6, 4 - 1 < max --> p2++ (hit the end, jump out of the program)
*/