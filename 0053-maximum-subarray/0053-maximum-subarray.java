class Solution {
    public int maxSubArray(int[] nums) {
        int curr_sum = nums[0];
        int max_sum = nums[0];
        int left = 0;
        int right = 1;
        while (right < nums.length) {
            if (curr_sum < 0) {
                left = right;
                curr_sum = nums[left];
            } else {
                curr_sum += nums[right];
            }
            right++;
            max_sum = Math.max(max_sum, curr_sum);
        }
        return max_sum;


    }
}