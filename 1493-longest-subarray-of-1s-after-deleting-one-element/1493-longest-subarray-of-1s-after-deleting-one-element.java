class Solution {
    public int longestSubarray(int[] nums) {
        // It is equivalent to find: the longest substring that contains at most one 0 
        int start = 0;
        int end = 0;
        int curr_length = 0;
        int curr_zero = 0;
        int max_length = 0;

        while (end < nums.length) {
            if (nums[end] == 0) {
                curr_zero++;
            }

            if (curr_zero <= 1) {
                curr_length++;
            } else {
                while (curr_zero > 1) {
                    if (nums[start] == 0) {
                        curr_zero--;
                    }
                    start++;
                }
                curr_length = end - start + 1;
            }

            max_length = Math.max(max_length, curr_length);

            end++;

        }

        return max_length - 1;
    }
}