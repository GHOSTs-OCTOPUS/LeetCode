/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return '0';

    const length = (1 << n) - 1;
    const mid = Math.floor((length + 1) / 2);

    if (k === mid) return '1';
    if (k < mid) return findKthBit(n - 1, k);

    const c = findKthBit(n - 1, length - k + 1);
    return c === '0' ? '1' : '0';
};