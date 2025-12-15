/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let ans = 0;
    let cnt = 1;

    for (let i = 0; i < prices.length; i++) {
        if (i === 0) {
            ans += cnt;
            continue;
        }

        if (prices[i] === prices[i - 1] - 1) {
            cnt++;
        } else {
            cnt = 1;
        }

        ans += cnt;
    }

    return ans;
};