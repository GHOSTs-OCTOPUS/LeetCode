/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const ans = [];
    remove(s, ans, 0, 0, ['(', ')']);
    return ans;
};

function remove(s, ans, i, j, p) {
    let count = 0;

    for (let k = i; k < s.length; k++) {
        if (s[k] === p[0]) count++;
        if (s[k] === p[1]) count--;

        if (count < 0) {
            for (let x = j; x <= k; x++) {
                if (s[x] === p[1] && (x === j || s[x - 1] !== p[1])) {
                    remove(s.slice(0, x) + s.slice(x + 1), ans, k, x, p);
                }
            }
            return;
        }
    }

    const rev = s.split('').reverse().join('');

    if (p[0] === '(') {
        remove(rev, ans, 0, 0, [')', '(']);
    } else {
        ans.push(rev);
    }
}