/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(b1, b2) {
    const map = new Map(), all = b1.concat(b2);
    for (let x of b1) map.set(x, (map.get(x) || 0) + 1);
    for (let x of b2) map.set(x, (map.get(x) || 0) - 1);

    const extra = [];
    let minVal = Math.min(...all);
    for (let [k, v] of map) {
        if (v % 2 !== 0) return -1;
        for (let i = 0; i < Math.abs(v) / 2; i++) extra.push(k);
    }
    extra.sort((a, b) => a - b);
    return extra.slice(0, extra.length / 2).reduce((sum, x) => sum + Math.min(x, 2 * minVal), 0);
};