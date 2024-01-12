class Solution {
    public int minInsertions(String s) {
        Stack<Character> stack = new Stack<>();
        Integer res = 0;
        for (int i = 0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if (curr == '(') {
                if (!stack.isEmpty()) {
                    if (stack.peek() == '(') {
                    } else {
                        res += 1;
                        stack.pop();
                        stack.pop();
                    }
                }
                stack.add(curr);
            } else {
                if (stack.isEmpty()) {
                    res += 1;
                    stack.add('(');
                    stack.add(curr);
                } else {
                    if (stack.peek() == '(') {
                        stack.add(curr);
                    } else {
                        stack.pop();
                        stack.pop();
                    }
                }
            }
        }

        while (!stack.isEmpty()) {
            if (stack.peek() == '(') {
                res += 2;
                stack.pop();
            } else {
                res += 1;
                stack.pop();
                stack.pop();
            }
        }

        return res;
    }
}