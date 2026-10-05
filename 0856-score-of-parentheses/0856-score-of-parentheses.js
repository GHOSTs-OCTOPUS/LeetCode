/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let st = [];
    let res = 0;

    for(let ch of s) {
        if(ch === '(') {
            st.push(res);
            res = 0;
        }
        else {
            res = st.pop() + Math.max(res * 2, 1);
        }
    }

    return res;
};