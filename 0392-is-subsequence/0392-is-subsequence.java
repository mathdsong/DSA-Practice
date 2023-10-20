class Solution {
    public boolean isSubsequence(String s, String t) {
        int p1 = 0;
        int p2 = 0;
        int count = 0;
        if (s.length() == 0) {
            return true;
        }
        if (s.length() > 0) {
            while (p2 < t.length()) {
                if (s.charAt(p1) == t.charAt(p2)) {
                    count++;
                    if (count == s.length()) {
                        return true;
                    }
                    p1++;
                } 
                p2++;
            }
        }
        return false;
    }
}