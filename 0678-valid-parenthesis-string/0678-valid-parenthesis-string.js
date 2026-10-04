/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let low = 0;
    let high = 0;

    for (const ch of s) {
        if (ch === '(') {
            low++;
            high++;
        } else if (ch === ')') {
            if (low > 0) {
                low--;
            }
            high--;
        } else {
            if (low > 0) {
                low--;
            }
            high++;
        }

        if (high < 0) {
            return false;
        }
    }
    return low === 0;
};