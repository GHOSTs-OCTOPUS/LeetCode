/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    restrictions.push([1, 0]);

    restrictions.push([n, n - 1]);

    restrictions.sort((a, b) => a[0] - b[0]);

    const m = restrictions.length;

    for (let i = 1; i < m; i++) {
        const dist = restrictions[i][0] - restrictions[i - 1][0];

        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i - 1][1] + dist
        );
    }

    for (let i = m - 2; i >= 0; i--) {
        const dist = restrictions[i + 1][0] - restrictions[i][0];

        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i + 1][1] + dist
        );
    }

    let ans = 0;

    for (let i = 1; i < m; i++) {
        const x1 = restrictions[i - 1][0];
        const h1 = restrictions[i - 1][1];

        const x2 = restrictions[i][0];
        const h2 = restrictions[i][1];

        const dist = x2 - x1;

        const peak =
            Math.max(h1, h2) +
            Math.floor((dist - Math.abs(h1 - h2)) / 2);

        ans = Math.max(ans, peak);
    }

    return ans;
};