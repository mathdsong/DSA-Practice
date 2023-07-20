class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        int res = 0;
        int[] copy = Arrays.copyOfRange(nums, 0, nums.length);
        Arrays.sort(copy);
        for (int i = 0; i < copy.length - 2; i++) {
            int left = i + 1;
            int right = copy.length - 1;
            while (right > left) {
                if (copy[i] + copy[left] + copy[right] < target) {
                    res += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}