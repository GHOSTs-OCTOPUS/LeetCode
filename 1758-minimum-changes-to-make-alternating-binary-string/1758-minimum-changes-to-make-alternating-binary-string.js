/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let mismatch = 0;
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) !== (i & 1)) {
            mismatch++;
        }
    }
    return Math.min(mismatch, s.length - mismatch);
};