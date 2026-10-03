/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const st = [-1];
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            st.push(i);
        } else {
            st.pop();
            if (st.length === 0)
                st.push(i);
            else
                res = Math.max(res, i - st[st.length - 1]);
        }
    }
    return res;
};