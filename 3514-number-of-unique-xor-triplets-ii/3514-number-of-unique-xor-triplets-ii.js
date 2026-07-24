/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const MAX_XOR = 2048;

    const present = new Array(MAX_XOR).fill(false);
    for (const x of nums) {
        present[x] = true;
    }

    let dp = new Array(MAX_XOR).fill(false);
    dp[0] = true;

    for (let step = 0; step < 3; step++) {
        const next = new Array(MAX_XOR).fill(false);

        for (let cur = 0; cur < MAX_XOR; cur++) {
            if (!dp[cur]) continue;

            for (let v = 0; v < MAX_XOR; v++) {
                if (present[v]) {
                    next[cur ^ v] = true;
                }
            }
        }

        dp = next;
    }

    let ans = 0;
    for (const ok of dp) {
        if (ok) ans++;
    }

    return ans;
};