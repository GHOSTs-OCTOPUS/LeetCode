/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    function check(x) {
        return !x.toString().includes('0');
    }

    for (let i = 1; i < n; i++) {
        let j = n - i;
        if (check(i) && check(j)) {
            return [i, j];
        }
    }
};