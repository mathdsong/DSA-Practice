class Solution {
    public List<String> removeAnagrams(String[] words) {
        List<String> result = new ArrayList<>();
        int i = 0, j = 1;
        while (j < words.length) {
            if (checkIfAnagrams(words[j], words[i])) {
                words[j] = "0";
                j++;
            } else {
                i = j;
                j++;
            }
        }
        // System.out.println(Arrays.toString(words));
        for (String word: words) {
            if (!word.equals("0")) result.add(word);
        }
        return result;
    }

    private boolean checkIfAnagrams(String w1, String w2) {
        if (w1.length() != w2.length()) return false;
        Map<Character, Integer> freq1 = new HashMap<>();
        Map<Character, Integer> freq2 = new HashMap<>();
        for (int i = 0; i < w1.length(); i++) {
            freq1.put(w1.charAt(i), freq1.getOrDefault(w1.charAt(i), 0) + 1);
            freq2.put(w2.charAt(i), freq2.getOrDefault(w2.charAt(i), 0) + 1);
        }
        return freq1.equals(freq2);
    }

}