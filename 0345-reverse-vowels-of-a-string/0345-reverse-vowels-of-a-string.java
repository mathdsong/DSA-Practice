class Solution {
    public String reverseVowels(String s) {
        List<Character> list = new ArrayList<>();
        HashSet<Character> vowelsSet = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        String res = "";

        for (int i = 0; i < s.length(); i++) {
            if (vowelsSet.contains(Character.toLowerCase(s.charAt(i)))) {
                list.add(s.charAt(i));
            }
        }

        int index = list.size() - 1;

        for (int j = 0; j < s.length(); j++) {
            if (vowelsSet.contains(Character.toLowerCase(s.charAt(j)))) {
                res += list.get(index);
                index--;
            } else {
                res += s.charAt(j);
            }
        }

        return res;
    }
}