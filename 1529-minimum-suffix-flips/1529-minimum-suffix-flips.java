class Solution {
    public int minFlips(String target) {
        Character curr = '0';
        int count = 0;
        for (int i = 0; i < target.length(); i++) {
            Character ith = target.charAt(i);
            if (curr != ith) {
                count++;
                curr = ith;
            }
        }
        return count;
    }
}