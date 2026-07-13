/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {

    const digits = "123456789";

    const ans = [];

    const minLen = low.toString().length;
    const maxLen = high.toString().length;

    for (let len = minLen; len <= maxLen; len++) {

        for (let start = 0; start + len <= 9; start++) {

            const num = Number(digits.substring(start, start + len));

            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    return ans;
};