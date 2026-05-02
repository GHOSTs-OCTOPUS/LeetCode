/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0;

    for (let num = 1; num <= n; num++) {
        let check = num;
        let valid = true;
        let changed = false;

        while (check > 0) {
            let digit = check % 10;

            if (digit === 3 || digit === 4 || digit === 7) {
                valid = false;
                break;
            } else if ([2, 5, 6, 9].includes(digit)) {
                changed = true;
            }

            check = Math.floor(check / 10);
        }

        if (valid && changed) count++;
    }

    return count;
};