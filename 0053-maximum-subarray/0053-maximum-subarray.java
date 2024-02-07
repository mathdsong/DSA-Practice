class Solution {
    public int maxSubArray(int[] nums) {
        /**
        hint: max_sub[j] := the maximum of subarray sum until index j
              max_sub[j] = MAX(max_sub[j - 1] + nums[j], nums[j])
         */
        int i = 1;
        int j = 1;
        int curr_sum = nums[0];
        int max_sum = nums[0];
        while (j < nums.length) {
             // if the new sum is less than the jth element:
             if (curr_sum + nums[j] < nums[j]) {
                 curr_sum = Math.max(curr_sum, nums[j]);
                 i = j;
             } else {
                curr_sum += nums[j];
             }
             max_sum = Math.max(curr_sum, max_sum);
             j++;
        }

        return max_sum;
    }
}