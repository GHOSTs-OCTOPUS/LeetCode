/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
    const n = s.length;

    const len = new Array(n);
    let curLen = 0n;

    for (let i = 0; i < n; i++) {
        const c = s[i];

        if (c >= 'a' && c <= 'z') {
            curLen++;
        } else if (c === '*') {
            if (curLen > 0n) curLen--;
        } else if (c === '#') {
            curLen *= 2n;
        } else {
        }

        len[i] = curLen;
    }

    let idx = BigInt(k);

    if (idx >= curLen) return '.';

    for (let i = n - 1; i >= 0; i--) {
        const c = s[i];
        const before = (i === 0 ? 0n : len[i - 1]);

        if (c >= 'a' && c <= 'z') {
            if (idx === before) return c;
        } else if (c === '#') {
            if (before > 0n) idx %= before;
        } else if (c === '%') {
            idx = before - 1n - idx;
        } else {
        }
    }

    return '.';
};