/** 
 * math background: solve a linear system
 * implementation: 
 * based on @param s, we can get the frequency of 15 letters (In fact, 10 letters will be enough for us to solve 10 equations) 
 * we store the frequency of 10 letters ('z', 'o', 'w', 'h', 'u', 'f', 'x', 's', 'g', 'i') 
                          into an array [ f0,  f1,  f2,  f3,  f4,  f5,  f6,  f7,  f8,  f9] (they are constants in the linear system)
 * set x0, x1, x2, x3, x4, x5, x6, x7, x8, x9 as variables that we need to solve
 * then we can have the following linear system:
 {
    x0 = f0
    x2 = f2
    x4 = f4
    x6 = f6
    x8 = f8
    x1 = f1 - x0 - x2 - x4
    x3 = f3 - x8
    x5 = f5 - x4
    x7 = f7 - x6
    x9 = f9 - x5 - x6 -x8
 }
 Of course, the representation of linear systems to solve this problem is not unique, there are other ways to represent x1, x3, x5, x7, x9 
 by using uqiue x0, x2, x4, x6, x8 and different fi's (where i is an odd number), 
 but the above way cost least amount of computations
 */
class Solution {
    public String originalDigits(String s) {
        int[] frequency_arr = new int[10];
        for (int i = 0; i < s.length(); i++) {
            char letter = s.charAt(i);
            if (letter == 'z') frequency_arr[0]++;
            if (letter == 'o') frequency_arr[1]++;
            if (letter == 'w') frequency_arr[2]++;
            if (letter == 'h') frequency_arr[3]++;
            if (letter == 'u') frequency_arr[4]++;
            if (letter == 'f') frequency_arr[5]++;
            if (letter == 'x') frequency_arr[6]++;
            if (letter == 's') frequency_arr[7]++;
            if (letter == 'g') frequency_arr[8]++;
            if (letter == 'i') frequency_arr[9]++;
        }

        frequency_arr[1] -= frequency_arr[0] + frequency_arr[2] + frequency_arr[4]; 
        frequency_arr[3] -= frequency_arr[8];
        frequency_arr[5] -= frequency_arr[4];
        frequency_arr[7] -= frequency_arr[6];
        frequency_arr[9] -= frequency_arr[5] + frequency_arr[6] + frequency_arr[8];

        StringBuilder result = new StringBuilder();
        for (int i = 0; i <= 9; i++){
            while (frequency_arr[i] > 0) {
                result.append(i);
                frequency_arr[i]--;
            }
        }
        return result.toString();
    }
}