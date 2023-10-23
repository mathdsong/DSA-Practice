class Solution {
    public int longestOnes(int[] nums, int k) {
        int i = 0;
        int j = 0;
        int curr_zero = 0;
        int curr_length = 0;
        int max_length = 0;

        while (j < nums.length) {
            if (nums[j] == 0) {
                curr_zero++;
            }
            if (curr_zero <= k) {
                curr_length++;
                max_length = Math.max(max_length, curr_length);
            } else {
                while (curr_zero > k) {
                    if (nums[i] == 0) {
                        curr_zero--;
                    }
                    i++;
                }
                curr_length = j - i + 1;
            }
            j++;
        }
    return max_length;
    }
}