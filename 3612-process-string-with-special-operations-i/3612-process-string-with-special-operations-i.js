/**
 * @param {string} s
 * @return {string}
 */
//translated using AI
var processStr = function(s) {
    let res = [];
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let ch = s[i];

        if (ch === '*') {
            if (res.length !== 0) {
                res.pop();
            }
        } 
        else if (ch === '#') {
            res.push(...res);
        } 
        else if (ch === '%') {
            res.reverse();
        } 
        else if (ch >= 'a' && ch <= 'z') {
            res.push(ch);
        }
    }

    return res.join('');
};