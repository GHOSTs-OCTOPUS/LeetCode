/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const mod = 1000000007n;
    let power = 1;
    while (power <= n)
        power <<= 1;
    power >>= 1;
    const parts = [];
    let m = n;
    while (m > 0){
        if (power <= m){
            parts.push(BigInt(power));
            m -= power;
        }
        power >>= 1;
    }
    const k = parts.length;
    const prefix = Array.from({length : k}, () => Array(k).fill(0n));
    for (let i = 0; i < k; i++){
        prefix[i][i] = parts[k - 1 - i] % mod;
        for (let j = i + 1; j < k; j++){
            prefix[i][j] = (prefix[i][j - 1] * parts[k - 1 - j]) % mod;
        }
    }
    const res = new Array(queries.length);
    for (let i = 0; i < queries.length; i++){
        const [l, r]= queries[i];
        res[i] = Number(prefix[l][r]);
    }
    return res;
};