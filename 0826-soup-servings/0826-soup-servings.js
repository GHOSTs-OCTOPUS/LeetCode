/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n > 5000) return 1.0;
    const units = Math.ceil(n / 25);
    const cache = Array.from({ length: units + 1 }, () => Array(units + 1).fill(null));

    const calcProb = (soupA, soupB) => {
        if (soupA <= 0 && soupB <= 0) return 0.5;
        if (soupA <= 0) return 1.0;
        if (soupB <= 0) return 0.0;
        if (cache[soupA][soupB] !== null) return cache[soupA][soupB];
        let prob = 0.25 * (
            calcProb(soupA - 4, soupB) +
            calcProb(soupA - 3, soupB - 1) +
            calcProb(soupA - 2, soupB - 2) +
            calcProb(soupA - 1, soupB - 3)
        );
        cache[soupA][soupB] = prob;
        return prob;
    };

    return calcProb(units, units);
};