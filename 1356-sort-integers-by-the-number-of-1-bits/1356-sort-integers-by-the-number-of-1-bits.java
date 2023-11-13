class Solution {
    public int[] sortByBits(int[] arr) {
        HashMap<Integer, ArrayList<Integer>> countMap = new HashMap<>();
        int maxCount = 0;
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            int num = arr[i], copy = num, count = 0;

            while (copy > 0) {
                int upper = logTwo(copy);
                if (upper >= 0) {
                    count++;
                    copy -= Math.pow(2, upper);
                } else {
                    break;
                }
            }

            maxCount = Math.max(maxCount, count);

            if (countMap.get(count) != null) {
                countMap.get(count).add(num);
            } else {
                ArrayList<Integer> init = new ArrayList<>();
                init.add(num);
                countMap.put(count, init);
            }
        }

        int j = 0;
        while (j <= maxCount) {
            if (countMap.containsKey(j)) {
                Collections.sort(countMap.get(j));
                list.addAll(countMap.get(j));
            }
            j++;
        }

        int[] result = list.stream().mapToInt(i -> i).toArray();

        return result;
    }

    private int logTwo(int N) {
        if (N != 0) {
            return (int) (Math.log(N) / Math.log(2));
        } else {
            return -1;
        }
    }
}