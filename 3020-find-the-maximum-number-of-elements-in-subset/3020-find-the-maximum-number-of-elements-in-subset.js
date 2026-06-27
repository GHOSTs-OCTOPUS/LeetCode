/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const freq = new Map();

    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let ans = 1;

    if (freq.has(1)) {
        const cnt = freq.get(1);

        ans = Math.max(ans, cnt % 2 ? cnt : cnt - 1);
    }

    for (const [start] of freq) {
        if (start === 1) continue;

        let cur = start;
        let len = 0;

        while (freq.has(cur)) {
            if (freq.get(cur) >= 2) {
                len += 2;

                cur = cur * cur;
            } else {
                len++;
                break;
            }
        }

        if (len % 2 === 0) len--;

        ans = Math.max(ans, len);
    }

    return ans;
};