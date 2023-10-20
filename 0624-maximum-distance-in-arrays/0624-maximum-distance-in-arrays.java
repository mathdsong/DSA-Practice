class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        int current_min = arrays.get(0).get(0);
        int current_max = arrays.get(0).get(arrays.get(0).size() - 1);
        int result = 0;

        for (int i = 1; i < arrays.size(); i++) {
            int current_length = arrays.get(i).size();
            result = Math.max(result, Math.max(Math.abs(current_max - arrays.get(i).get(0)), Math.abs(arrays.get(i).get(current_length - 1) - current_min)));
            current_min = Math.min(current_min, arrays.get(i).get(0));
            current_max = Math.max(current_max, arrays.get(i).get(current_length - 1));
        }

        return result;
    }
}