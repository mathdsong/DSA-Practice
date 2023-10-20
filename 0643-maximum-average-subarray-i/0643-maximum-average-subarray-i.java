class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int max = Integer.MIN_VALUE;
        int curr_sum = 0;
        
        for (int i = 0; i < k; i++) {
            curr_sum += nums[i];
        }
        max = Math.max(max, curr_sum);

        for (int i = k; i < nums.length; i++) {
            curr_sum = curr_sum + nums[i] - nums[i - k];
            max = Math.max(curr_sum, max);
        }

        return (double) max / k;

    }
}