class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        // if curr is 1, i+2
        // if curr is 0, check prev and next
            // if both 0, place 1 at curr, counter + 1, i+2
            // if next is 0, i+1
            // if next is 1, i+3
        int i = 0;
        int count = 0;
        while (i < flowerbed.length) {
            int curr = flowerbed[i];
            if (curr == 1) {
                i += 2;
            } else {
                boolean leftZero = (i == 0) || (flowerbed[i - 1] == 0);
                boolean rightZero = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);
                if (leftZero && rightZero) {
                    count++;
                    i += 2;
                } else if (rightZero) {
                    i++;
                } else if (!rightZero) {
                    i += 3;
                }
            }
        }

        if (count >= n) {
            return true;
        }
        return false;
    }
}