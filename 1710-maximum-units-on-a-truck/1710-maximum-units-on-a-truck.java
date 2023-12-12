class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        int total_boxes = 0, result = 0;
        Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]);
        for (int i = 0; i < boxTypes.length; i++) {
            int curr_box = boxTypes[i][0], curr_unit = boxTypes[i][1];
            if (total_boxes + curr_box <= truckSize) {
                result += curr_box * curr_unit;
                total_boxes += curr_box;
            } else {
                result += (truckSize - total_boxes) * curr_unit;
                return result;
            }
        }
        return result;
    }
}