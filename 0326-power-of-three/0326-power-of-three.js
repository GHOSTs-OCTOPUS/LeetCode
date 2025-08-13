/**
 * @param {number} n
 * @return {boolean}
 */
// JavaScript
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};