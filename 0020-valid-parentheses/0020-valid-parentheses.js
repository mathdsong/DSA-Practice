/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hashmap = new Map();
    hashmap.set("(", ")").set("{", "}").set("[", "]");
    let hashset = new Set();
    hashset.add("(").add("[").add("{");

    for (let i = 0; i < s.length; i++) {
        if (hashset.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (hashmap.get(stack[stack.length - 1]) === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};