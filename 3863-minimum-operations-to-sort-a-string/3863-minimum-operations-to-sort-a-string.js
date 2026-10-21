/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let n = s.length;
    let flag = true;

    for(let i = 0; i < n; i++) {
        if(i > 0 && s[i] < s[i - 1]) {
            flag = false;
            break;
        }
    }

    if(flag) {
        return 0;
    }

    if(n === 2) {
        return -1;
    }

    let minChar = 'z';
    let maxChar = 'a';

    for(let ch of s) {
        minChar = ch < minChar ? ch : minChar;
        maxChar = ch > maxChar ? ch : maxChar;
    }

    if(minChar === s[0] || maxChar === s[n - 1]) {
        return 1;
    }

    for(let i = 1; i < n - 1; i++) {
        if(s[i] === minChar || s[i] === maxChar) {
            return 2;
        }
    }

    return 3;
};