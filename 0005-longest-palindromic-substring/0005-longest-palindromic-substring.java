class Solution {
    String curr = "";
    public String longestPalindrome(String s) {
        if (s.length() == 2 && s.charAt(0) == s.charAt(1)) return s;
        String longest = "";
        // odd case:
        for (int i = 1; i < s.length() - 1; i++) {
            curr = String.valueOf(s.charAt(i));
            int left = i - 1;
            int right = i + 1;
            helper(left, right, s);
            if (longest.length() < curr.length()) {
                longest = curr;
            }
        }

        // even case:
        for (int p = 1; p < s.length() - 2; p++) {
            Character c1 = s.charAt(p);
            Character c2 = s.charAt(p + 1);
            if (c1 == c2) {
                curr = new StringBuilder().append(c1).append(c2).toString();
                int left1 = p - 1;
                int right1 = p + 2;
                helper(left1, right1, s);
                if (longest.length() < curr.length()) {
                    longest = curr;
                } 
            }
        }

        return longest.length() > 1 ? longest : String.valueOf(s.charAt(0));
    }

    private void helper(int left, int right, String str) {
        while (left >= 0 && right < str.length()) {
            Character char_l = str.charAt(left);
            Character char_r = str.charAt(right);
            if (char_l == char_r) {
                curr = new StringBuilder().append(char_l).append(curr).append(char_r).toString();
                left--;
                right++;
            } else {
                if (String.valueOf(char_l).equals(curr)) {
                    curr = new StringBuilder().append(char_l).append(curr).toString();
                } else if (String.valueOf(char_r).equals(curr)) {
                    curr = new StringBuilder().append(curr).append(char_r).toString();
                } 
                break;
            }
        }
    }
}