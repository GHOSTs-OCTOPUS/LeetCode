/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    const original = n;
    let digitSum = 0;
    let digitProduct = 1;

    while (n > 0) {
        const digit = n % 10;
        digitSum += digit;
        digitProduct *= digit;
        n = Math.floor(n / 10);
    }

    const divisor = digitSum + digitProduct;
    return original % divisor === 0;
};