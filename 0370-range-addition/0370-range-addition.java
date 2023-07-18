// method2-prefix:
class Solution {
    public int[] getModifiedArray(int length, int[][] updates) {

        int[] arr = new int[length];

        for (int i = 0; i < updates.length; i++) {
            int start = updates[i][0];
            int end = updates[i][1];
            int val = updates[i][2];

            arr[start] += val;
            if (end + 1 < length) {
                arr[end + 1] -= val;
            }
            // System.out.println(Arrays.toString(arr));
        }

        for (int j = 1; j < length; j++) {
            arr[j] += arr[j -  1];
        }

        return arr;

    }
}


