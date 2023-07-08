class Solution {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            if (map.containsKey(arr[i])) {
                map.put(arr[i], map.get(arr[i]) + 1);
            } else {
                map.put(arr[i], 1);
            }
        }

        // System.out.println(map);

        int size = map.size();
        int[] array = new int[size];
        int j = 0;

        for (Map.Entry<Integer, Integer> pair : map.entrySet()) {
            array[j] = pair.getValue();
            j++;
        }

        Arrays.sort(array); 

        // System.out.println(Arrays.toString(array));

        int index = 0;

        while (k > 0) {
            k -= array[index];
            if (k >= 0) {
                index++;
            }
        }

        return array.length - index;
        
    }
}