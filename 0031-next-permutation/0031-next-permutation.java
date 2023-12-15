class Solution {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 1;
        if (i == 0) {
            return;
        } else {
            while (i >= 1 && nums[i] <= nums[i - 1]) {
                i--;
            }
        }

        if (i == 0) {
            // reverse the array
            reverseArray(nums, 0, nums.length - 1);
        } else {
            // found the 1st extreme point (right -> left)
            // find the smallest larger number, and switch with the extreme point
            int j = nums.length - 1;
            while (nums[j] <= nums[i - 1]) {
                j--;
            }
            int temp = nums[j];
            nums[j] = nums[i - 1];
            nums[i - 1] = temp;
            // reverse the right side
            reverseArray(nums, i, nums.length - 1);
        }
    }

    private void reverseArray(int[] nums, int left, int right) {
        while (left < right) {
            int temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right--;
        }
    }
}