/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {

    const n = nums.length;

    if (n === 1) return 0;

    const mx = Math.max(...nums);

    const spf = Array(mx + 1).fill(0);

    for (let i = 0; i <= mx; i++) {
        spf[i] = i;
    }

    for (let i = 2; i * i <= mx; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= mx; j += i) {
                if (spf[j] === j) {
                    spf[j] = i;
                }
            }
        }
    }

    const mp = new Map();

    for (let i = 0; i < n; i++) {

        let x = nums[i];

        const used = new Set();

        while (x > 1) {

            const p = spf[x];

            if (!used.has(p)) {

                if (!mp.has(p)) {
                    mp.set(p, []);
                }

                mp.get(p).push(i);

                used.add(p);
            }

            x = Math.floor(x / p);
        }
    }

    const q = [0];

    const dist = Array(n).fill(-1);

    dist[0] = 0;

    let front = 0;

    while (front < q.length) {

        const i = q[front++];

        const steps = dist[i];

        if (i === n - 1) {
            return steps;
        }

        if (i - 1 >= 0 && dist[i - 1] === -1) {
            dist[i - 1] = steps + 1;
            q.push(i - 1);
        }

        if (i + 1 < n && dist[i + 1] === -1) {
            dist[i + 1] = steps + 1;
            q.push(i + 1);
        }

        const val = nums[i];

        if (val > 1 && spf[val] === val) {

            const list = mp.get(val) || [];

            for (const nxt of list) {

                if (dist[nxt] === -1) {
                    dist[nxt] = steps + 1;
                    q.push(nxt);
                }
            }

            mp.set(val, []);
        }
    }

    return -1;
};