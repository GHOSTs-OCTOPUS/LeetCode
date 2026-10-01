/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    const stack = new Array(s.length);
    let head = 0;

    for (const c of s) {
        if (c === '(') {
            stack[head++] = ')';
        } else if (c === '{') {
            stack[head++] = '}';
        } else if (c === '[') {
            stack[head++] = ']';
        } else {
            if (head === 0 || stack[--head] !== c) {
                return false;
            }
        }
    }

    return head === 0;
};