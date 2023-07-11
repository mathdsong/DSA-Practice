class Solution {

    public boolean helper(HashMap<Character, Integer> m1, HashMap<Character, Integer> m2) {

        for (Map.Entry<Character, Integer> entry: m1.entrySet()) {
            Character key = entry.getKey();
            Integer value = entry.getValue();
            if (m2.containsKey(key)) {
                if (Math.abs(m2.get(key) - value) > 3) {
                    return false;
                }
            } else {
                if (value > 3) {
                    return false;
                }
            }
        }

        return true;
    }
        
    public boolean checkAlmostEquivalent(String word1, String word2) {
        HashMap<Character, Integer> map1 = new HashMap<>();
        HashMap<Character, Integer> map2 = new HashMap<>();

        for (int i = 0; i < word1.length(); i++) {
            map1.put(word1.charAt(i), map1.getOrDefault(word1.charAt(i), 0) + 1);
            map2.put(word2.charAt(i), map2.getOrDefault(word2.charAt(i), 0) + 1);
        }

        return helper(map1, map2) & helper(map2, map1);
    }
}