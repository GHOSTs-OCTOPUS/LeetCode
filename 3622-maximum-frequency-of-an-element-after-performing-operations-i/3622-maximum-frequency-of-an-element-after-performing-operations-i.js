/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
const maxFrequency = (nums, k, numOps) => {
    const maxVal = Math.max(...nums) + k + 2;
    const count = new Array(maxVal).fill(0);

    for (const v of nums)
        count[v]++;

    for (let i = 1; i < maxVal; i++)
        count[i] += count[i - 1];

    let res = 0;
    for (let i = 0; i < maxVal; i++) {
        const left = Math.max(0, i - k);
        const right = Math.min(maxVal - 1, i + k);
        const total = count[right] - (left ? count[left - 1] : 0);
        const freq = count[i] - (i ? count[i - 1] : 0);
        res = Math.max(res, freq + Math.min(numOps, total - freq));
    }

    return res;
};