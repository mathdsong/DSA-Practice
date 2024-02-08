class Solution {
    String curr = "";
    public String longestPalindrome(String s) {
        int length = s.length();
        if (length == 2 && s.charAt(0) == s.charAt(1)) return s;
        String longest = "";

        for (int i = 1; i < length - 1; i++) {
            curr = String.valueOf(s.charAt(i));
            int left = i - 1;
            int right = i + 1;
            helper(left, right, s);
            if (longest.length() < curr.length()) {
                longest = curr;
            }

            if (i < length - 2) {
                Character c1 = s.charAt(i);
                Character c2 = s.charAt(i + 1);
                if (c1 == c2) {
                    curr = "" + c1 + c2;
                    int left1 = i - 1;
                    int right1 = i + 2;
                    helper(left1, right1, s);
                    if (longest.length() < curr.length()) {
                        longest = curr;
                    } 
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
                curr = char_l + curr + char_r;
                left--;
                right++;
            } else {
                if (String.valueOf(char_l).equals(curr)) {
                    curr = char_l + curr;
                } else if (String.valueOf(char_r).equals(curr)) {
                    curr = curr + char_r;
                } 
                break;
            }
        }
    }
}