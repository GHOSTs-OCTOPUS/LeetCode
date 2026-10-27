/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const result = ['.'.repeat(n)];
    const rest = '#'.repeat(n - 1) + '.';
    for (let i = 1; i < m; i++) {
        result.push(rest);
    }
    return result;
};