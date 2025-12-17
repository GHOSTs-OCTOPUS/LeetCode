/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    const firstPrice = prices[0];
    const dp = Array(k + 1).fill(null).map(() => ({
        maxProfit: 0,
        buyHold: -firstPrice,
        sellHold: firstPrice
    }));
    const n = prices.length;
    
    for (let day = 1; day < n; day++) {
        const currPrice = prices[day];
        for (let trans = k; trans > 0; trans--) {
            const prevProfit = dp[trans - 1].maxProfit;
            dp[trans].maxProfit = Math.max(dp[trans].maxProfit, dp[trans].buyHold + currPrice, dp[trans].sellHold - currPrice);
            dp[trans].buyHold = Math.max(dp[trans].buyHold, prevProfit - currPrice);
            dp[trans].sellHold = Math.max(dp[trans].sellHold, prevProfit + currPrice);
        }
    }
    
    return dp[k].maxProfit;
};