class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(arr);
        // System.out.println(Arrays.toString(arr));
        Map<Integer, List<List<Integer>>> diff_map = new HashMap<>();
        for (int i = 0; i < arr.length - 1; i++) {
            int diff = arr[i+1] - arr[i];
            List<List<Integer>> diff_list = new ArrayList<>();
            if (diff_map.containsKey(diff)) {
                diff_map.get(diff).add(new ArrayList<>(Arrays.asList(arr[i], arr[i+1])));
            } else {
                diff_list.add(new ArrayList<>(Arrays.asList(arr[i], arr[i+1])));
                diff_map.put(diff, diff_list);
            }
        }
        // System.out.println(diff_map);
        int min = Integer.MAX_VALUE;
        for (Integer key: diff_map.keySet()) {
            if (key < min) {
                min = key;
            }
        }
        return diff_map.get(min);
    }
}