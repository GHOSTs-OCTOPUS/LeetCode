/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1000000007;
    
    let dp = 1;
    const last = new Array(26).fill(0);
    
    for (const ch of s) {
        const index = ch.charCodeAt(0) - 97;
        
        const oldDp = dp;
        
        dp = (2 * dp - last[index] + MOD) % MOD;
        
        last[index] = oldDp;
    }
    
    return (dp - 1 + MOD) % MOD;
};