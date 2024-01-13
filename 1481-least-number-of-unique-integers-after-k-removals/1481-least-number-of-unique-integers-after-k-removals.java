class Solution {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        List<Integer> list = new ArrayList<>();

        for (int i: arr) {
            freq.put(i, freq.getOrDefault(i, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry: freq.entrySet()) {
            list.add(entry.getValue());
        }

        Collections.sort(list, new Comparator<Integer>(){
            public int compare(Integer x, Integer y) {
                return x.compareTo(y);
            }
        });

        int result = freq.size();
        int j = 0;

        while (k >= 0 && j < list.size()) {
            if (list.get(j) <= k) {
                k -= list.get(j);
                j++;
                result--;
            } else {
                break;
            }
        }

        return result;



    }
}