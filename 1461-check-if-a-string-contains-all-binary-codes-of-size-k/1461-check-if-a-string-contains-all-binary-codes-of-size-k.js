/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let total = 1 << k;
    let seen = new Array(total).fill(false);
    let mask = 0;
    let limit = total - 1;

    for (let i = 0; i < s.length; i++) {
        mask = ((mask << 1) & limit) | (s[i] === '1');
        if (i >= k - 1 && !seen[mask]) {
            seen[mask] = true;
            total--;
            if (total === 0) return true;
        }
    }
    return false;
};