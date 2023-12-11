class Solution {
    public int countNumbersWithUniqueDigits(int n) {
        if (n == 0) return 1;
        if (n == 1) return 10;
        int result = 10;
        for (int i = 2; i <= n; i++) {
            result += 9 * permutation(9, i - 1);
        }
        return result;
    }

    private int permutation(int n, int r) {
        if (r != 0) return nFactorial(n) / nFactorial(n - r);
        return 1;
    }

    private int nFactorial(int n) {
        int result = 1;
        while (n > 0) {
            result *= n;
            n--;
        }
        return result;
    }
}