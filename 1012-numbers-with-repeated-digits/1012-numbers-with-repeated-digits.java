/** 
 * for example: 
 * n = 38567, m = 5, digits = [3, 8, 5, 6, 7]
 * [•] between 1 and 9999: 9 * (P(9, 0) + P(9, 1) + P(9, 2) + P(9, 3)) = 5274
 * [•] between 10000 and 38567:
 *     [••] 1 _ _ _ _ ~ 2 _ _ _ _ : 2 * P(9, 4) = 6048
 *     [••] 3 0 _ _ _ ~ 3 7 _ _ _ : 7 * P(8, 3) = 2352 
 *     [••] 3 8 0 _ _ ~ 3 8 4 _ _ : 4 * P(7, 2) = 168 
 *     [••] 3 8 5 0 _ ~ 3 8 5 5 _ : 4 * P(6, 1) = 24 
 *     [••] 3 8 5 6 0 ~ 3 8 5 6 7 : 5
 * result = 38567 - 5274 - 6048 - 2352 - 168 - 24 - 5 = 24696
 */

class Solution {

    public int numDupDigitsAtMostN(int n) {
        int total = 0;
        int copy = n;
        // store each digit into the list:
        ArrayList<Integer> digits = new ArrayList<>();
        while (copy > 0) {
            digits.add(0, copy % 10);
            copy = copy / 10;
        }
        
        int digits_size = digits.size(), i = 0;
        if (digits_size == 1) return 0;
        // 1 to (digits_size - 1) case:
        while (i < digits_size - 1) {
            total += permutation(9, i);
            i++;
        }
        total *= 9;


        // digits_size case:
        // subcase 1:
        total += (digits.get(0) - 1) * permutation(9, digits_size - 1);

        // subcase 2:
        HashSet<Integer> prev_digits = new HashSet<>();
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

        return n - total;
    }


    private int permutation(int n, int r) {
        if (r != 0) {
            return nFactorial(n) / nFactorial(n - r);
        } else {
            return 1;
        }
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