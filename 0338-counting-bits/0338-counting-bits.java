class Solution {
    private int popCount(int x) {
        int sum = 0;
        while (x != 0) {
            sum++;
            x &= (x - 1);
        }
        return sum;
    }
    public int[] countBits(int n) {
        int[] ans = new int[n+1];
        for (int i = 0; i <= n; i++) {
            ans[i] = popCount(i);
        }
        return ans;
    }
}