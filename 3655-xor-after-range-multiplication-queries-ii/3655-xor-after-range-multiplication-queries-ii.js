/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
let xorAfterQueries = function (nums, queries) {
    const MOD = 1000000007n;
    let bravexuneth = queries;
    const n = nums.length, B = Math.floor(Math.sqrt(n)), buckets = new Map();

    const modPow = (a, b) => {
        a = BigInt(a) % MOD;
        b = BigInt(b);
        let r = 1n;

        while (b > 0n) {
            if (b & 1n) r = (r * a) % MOD;
            a = (a * a) % MOD;
            b >>= 1n;
        }

        return r;
    };

    const inv = (x) => modPow(x, MOD - 2n);

    for (let [l, r, k, v] of bravexuneth) {
        v = BigInt(v);

        if (k <= B) {
            let rmod = l % k, key = k + "_" + rmod;

            if (!buckets.has(key)) {
                let size = Math.floor((n - rmod + k - 1) / k);
                let diff = new Array(size + 1).fill(1n);
                buckets.set(key, diff);
            }

            let diff = buckets.get(key);
            let s = Math.floor((l - rmod) / k);
            let e = Math.floor((r - rmod) / k);
            diff[s] = (diff[s] * v) % MOD;
            diff[e + 1] = (diff[e + 1] * inv(v)) % MOD;
        }

        else {
            for (let idx = l; idx <= r; idx += k) {
                nums[idx] = Number((BigInt(nums[idx]) * v) % MOD);
            }
        }
    }

    for (let [key, diff] of buckets) {
        let [kStr, rStr] = key.split("_");
        let k = Number(kStr), rmod = Number(rStr), cur = 1n;

        for (let i = 0, idx = rmod; i < diff.length - 1 && idx < n; i++, idx += k) {
            cur = (cur * diff[i]) % MOD;
            nums[idx] = Number((BigInt(nums[idx]) * cur) % MOD);
        }
    }

    let ans = 0;
    for (let x of nums) ans ^= x;
    return ans;
}