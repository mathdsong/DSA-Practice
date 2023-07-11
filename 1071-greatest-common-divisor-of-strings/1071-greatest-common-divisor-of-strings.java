class Solution {
    public String gcdOfStrings(String str1, String str2) {
        String res = "";
        int l1 = str1.length();
        int l2 = str2.length();
        int gcd = 1;
        int index = 1;

        while (index <= Math.min(l1, l2)) {
            if (l1 % index == 0 & l2 % index == 0) {
                gcd = index;
            }
            index++;
        }

        for (int i = 0; i < gcd; i++) {
            if (str1.charAt(i) != str2.charAt(i)) {
                return "";
            } else {
                res += str1.charAt(i);
            }
        }

        if (!str1.equals(res.repeat(l1 / gcd)) || !str2.equals(res.repeat(l2 / gcd))) {
            return "";
        }

        return res;

    }
}