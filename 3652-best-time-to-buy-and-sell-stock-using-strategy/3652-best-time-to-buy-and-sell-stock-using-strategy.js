/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    const n = prices.length, h = k >> 1;
    let base = 0, prev = 0, nxt = 0, best = 0;

    for (let i = 0; i < n; i++)
        base += strategy[i] * prices[i];

    for (let i = 0; i < k; i++) {
        prev += strategy[i] * prices[i];
        if (i >= h) nxt += prices[i];
    }

    best = Math.max(0, nxt - prev);

    for (let r = k; r < n; r++) {
        const l = r - k + 1;
        prev += strategy[r] * prices[r]
              - strategy[l - 1] * prices[l - 1];
        nxt += prices[r] - prices[l - 1 + h];
        best = Math.max(best, nxt - prev);
    }

    return base + best;
};