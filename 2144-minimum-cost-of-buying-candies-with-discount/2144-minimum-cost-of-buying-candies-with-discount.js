/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);

    let total = 0;

    for (let i = 0; i < cost.length; i++) {
        if (i % 3 !== 2) {
            total += cost[i];
        }
    }

    return total;
};