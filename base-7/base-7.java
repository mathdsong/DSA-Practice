class Solution {
    public String convertToBase7(int num) {
        String result = "";
        List<Integer> digits = new ArrayList();
        int copy = Math.abs(num);
        
        while (copy > 0) {
            int remainder = copy % 7;
            copy /= 7;
            digits.add(0, remainder);
        }
        
        for (int digit: digits) {
            result += digit;
        }
        
        
        
        return num < 0 ? '-' + result :
               num == 0 ? "0" :
               result;
    }
}