/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let last = -1, maxGap = 0, index = 0;
    while (n > 0) {
        if (n & 1) {
            if (last !== -1) maxGap = Math.max(maxGap, index - last);
            last = index;
        }
        n >>= 1;
        index++;
    }
    return maxGap;
};