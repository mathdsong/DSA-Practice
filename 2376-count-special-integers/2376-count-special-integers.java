class Solution {
    public int countSpecialNumbers(int n) {
        int total = 0;
        List<Integer> digits = new ArrayList<>();
        int copy = n;
        while (copy > 0) {
            digits.add(0, copy % 10);
            copy = copy / 10;
        }


        int digits_size = digits.size(), i = 0;
        if (digits_size == 1) return n; 
        while (i < digits_size - 1) {
            total += permutation(9, i);
            i++;
        }
        total *= 9;

        total += (digits.get(0) - 1) * permutation(9, digits_size - 1);

        Set<Integer> prev_digits = new HashSet<>();
        prev_digits.add(digits.get(0));

        for (int j = 1; j < digits_size - 1; j++) {
            if (prev_digits.size() < j) break;
            int digit = digits.get(j);
            int occurrence = 0;
            for (int k : prev_digits) {
                if (k <= digit - 1) {
                    occurrence++;
                }
            }
            total += (digit - occurrence) * permutation(9 - j, digits_size - j - 1); 
            prev_digits.add(digit);
        }

        int last = digits.get(digits_size - 1), copy_last = last, cnt = 0; 
        while (last >= 0) {
            if (prev_digits.contains(last)) {
                cnt++;
            }
            last--;
        }

        if (prev_digits.size() == digits_size - 1) {
            total += copy_last + 1 - cnt;
        }
        return total;
        
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