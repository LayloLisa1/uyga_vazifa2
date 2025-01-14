function minRemoveToMakeValid(s) {
    const stack = [];
    const removeIndices = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                removeIndices.add(i);
            } else {
                stack.pop();
            }
        }
    }
    while (stack.length > 0) {
        removeIndices.add(stack.pop());
    }
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!removeIndices.has(i)) {
            result += s[i];
        }
    }
    return result;
}
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d")); 
console.log(minRemoveToMakeValid("))(("));
