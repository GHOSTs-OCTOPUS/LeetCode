/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let total = 0;
    for (let x of nums) total += x;

    const target = total % p;
    if (target === 0) return 0;

    const mp = new Map();
    mp.set(0, -1);

    let prefix = 0;
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;
        let need = (prefix - target + p) % p;

        if (mp.has(need))
            res = Math.min(res, i - mp.get(need));

        mp.set(prefix, i);
    }
    return res === nums.length ? -1 : res;
};