class Solution {
    public String breakPalindrome(String palindrome) {
        int L = palindrome.length();
        // if the length is 1, impossible to be changed into non-palindrome, return empty string
        if (L == 1) return "";

        // convert the palindrome string into a char array
        char[] palindromeArray = palindrome.toCharArray();
        
        // if there is at least one non-a in the left half, we will replace the first non-a into letter a
        for (int i = 0; i < L/2; i++) {
            Character curr = palindrome.charAt(i);
            if (curr != 'a') {
                palindromeArray[i] = 'a';
                // convert the char array back into the final string
                return String.valueOf(palindromeArray);
            }
        }
        // traverse the left half, if all a's, then we change the last character of the entire string into letter b
        palindromeArray[L-1] = 'b';
        return String.valueOf(palindromeArray);

    }
}