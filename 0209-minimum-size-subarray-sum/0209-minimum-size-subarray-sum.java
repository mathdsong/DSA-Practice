class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int i = 0;
        int j = 0;
        int curr_sum = 0;
        int curr_length = 0;
        int min_length = nums.length;
        boolean hit_target = false;

        while (j < nums.length) {
            curr_sum += nums[j];
            curr_length++;
            if (curr_sum >= target) {
                hit_target = true;
                while (curr_sum >= target) {
                    min_length = Math.min(min_length, curr_length);
                    curr_sum -= nums[i];
                    i++;
                    curr_length = j - i + 1;
                }
            }
            j++;
        }

        if (!hit_target && min_length == nums.length) {
            return 0;
        }
        return min_length;
    }
}