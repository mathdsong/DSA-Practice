class Solution {
    public boolean isValid(String s) {
        Stack<Character> myStack = new Stack<Character>();
        HashMap<Character, Character> myHashMap = new HashMap<Character, Character>();
        myHashMap.put('(', ')');
        myHashMap.put('{', '}');
        myHashMap.put('[', ']');
        HashSet<Character> myHashSet = new HashSet<Character>();
        myHashSet.add('(');
        myHashSet.add('[');
        myHashSet.add('{');
        
        for (int i = 0; i < s.length(); i++) {
            if (myHashSet.contains(s.charAt(i))) {
                myStack.push(s.charAt(i));
            } else {
                if (myStack.size() > 0) {
                    if (s.charAt(i) == myHashMap.get(myStack.get(myStack.size() - 1))) {
                        myStack.pop();
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        return myStack.size() == 0 ? true : false;
    }
}