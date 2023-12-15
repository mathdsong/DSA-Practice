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
            exchange(nums, j, i - 1);
            // reverse the right side
            reverseArray(nums, i, nums.length - 1);
        }
    }

    private void reverseArray(int[] nums, int left, int right) {
        while (left < right) {
            exchange(nums, left, right);
            left++;
            right--;
        }
    }

    private void exchange(int[] nums, int x, int y) {
        int temp = nums[x];
        nums[x] = nums[y];
        nums[y] = temp;
    }
}