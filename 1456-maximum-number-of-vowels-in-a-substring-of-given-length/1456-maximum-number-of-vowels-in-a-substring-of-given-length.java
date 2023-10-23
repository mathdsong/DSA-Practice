class Solution {
    public int maxVowels(String s, int k) {

        int max_count = 0;
        int curr_count = 0;
        int i = 0;
        HashSet<Character> vowel = new HashSet<Character>();

        vowel.add('a');
        vowel.add('e');
        vowel.add('i');
        vowel.add('o');
        vowel.add('u');

        for (i = 0; i < k; i++) {
            if (vowel.contains(s.charAt(i))) {
                curr_count++;
            }
        }

        max_count = curr_count;

        while (i >= k && i < s.length()) {
            if (vowel.contains(s.charAt(i-k))) {
                curr_count--;
            }
            if (vowel.contains(s.charAt(i))) {
                curr_count++;
            }
            max_count = Math.max(max_count, curr_count);
            i++;
        }

        return max_count;
    }
}