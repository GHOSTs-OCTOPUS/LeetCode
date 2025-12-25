/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => a - b);
    let res = 0;
    let count = 0;
    for (let i = happiness.length - 1; i >= happiness.length - k; i--) {
        if (happiness[i] - count > 0) {
            res += (happiness[i] - count);
        }
        count++;
    }
    return res;
};