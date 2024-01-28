class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> res = new ArrayList<>();
        Map<Character, Integer> freq_p = new HashMap<>();
        Map<Character, Integer> freq_sub_s = new HashMap<>();
        int window_size = p.length();

        for (int i = 0; i < window_size; i++) {
            Character c = p.charAt(i);
            freq_p.put(c, freq_p.getOrDefault(c, 0) + 1);
        }

        int l = 0, start = 0;
        for (int j = 0; j < s.length(); j++) {
            Character ch = s.charAt(j);
            if (l < window_size) {
                freq_sub_s.put(ch, freq_sub_s.getOrDefault(ch, 0) + 1);
                l++;
            }
            if (l == window_size) {
                if (freq_p.equals(freq_sub_s)) {
                    res.add(start);
                }
                Character removed = s.charAt(start);
                if (freq_sub_s.get(removed) > 1) {
                    freq_sub_s.put(removed, freq_sub_s.get(removed) - 1);
                } else {
                    freq_sub_s.remove(removed);
                }
                l--;
                start++;
            }
        }

        return res;

    }
}