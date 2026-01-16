/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
    const MOD = 1000000007n;

    hFences.push(1, m);
    vFences.push(1, n);

    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);

    const hSet = new Set();
    const vSet = new Set();

    for (let i = 0; i < hFences.length; i++)
        for (let j = i + 1; j < hFences.length; j++)
            hSet.add(hFences[j] - hFences[i]);

    for (let i = 0; i < vFences.length; i++)
        for (let j = i + 1; j < vFences.length; j++)
            vSet.add(vFences[j] - vFences[i]);

    let maxSide = 0;
    for (let d of hSet)
        if (vSet.has(d))
            maxSide = Math.max(maxSide, d);

    if (maxSide === 0) return -1;

    const side = BigInt(maxSide);
    return Number((side * side) % MOD);
};