class Solution {
    public boolean squareIsWhite(String coordinates) {
       String column = coordinates.substring(0, 1);
       int row = Integer.parseInt(coordinates.substring(1));
       HashSet<String> mySet = new HashSet<>(Arrays.asList("a", "c", "e", "g"));

       if (mySet.contains(column)) {
           if (row % 2 == 1) {
               return false;
           } else {
               return true;
           }
       } else {
           if (row % 2 == 1) {
               return true;
           } else {
               return false;
           }
       }
    }
}