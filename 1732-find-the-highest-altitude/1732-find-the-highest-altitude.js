/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0, mx = 0;
    for (let x of gain)
        mx = Math.max(mx, sum += x);
    return mx;
};