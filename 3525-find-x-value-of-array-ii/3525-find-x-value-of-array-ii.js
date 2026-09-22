/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    let size = 1;

    while (size < nums.length) {
        size <<= 1;
    }

    const cnt = new Int32Array(2 * size * k);
    const prod = new Int32Array(2 * size);

    for (let i = 0; i < nums.length; i++) {
        const r = nums[i] % k;
        const node = size + i;

        cnt[node * k + r] = 1;
        prod[node] = r;
    }

    function merge(node, left, right) {
        const nb = node * k;
        const lb = left * k;
        const rb = right * k;

        for (let r = 0; r < k; r++) {
            cnt[nb + r] = cnt[lb + r];
        }

        for (let r = 0; r < k; r++) {
            if (cnt[rb + r] === 0) continue;

            const nr = (prod[left] * r) % k;
            cnt[nb + nr] += cnt[rb + r];
        }

        prod[node] = (prod[left] * prod[right]) % k;
    }

    for (let i = size - 1; i > 0; i--) {
        merge(i, i * 2, i * 2 + 1);
    }

    function update(idx, val) {
        let node = size + idx;
        const r = val % k;
        const base = node * k;

        for (let x = 0; x < k; x++) {
            cnt[base + x] = 0;
        }

        cnt[base + r] = 1;
        prod[node] = r;

        node >>= 1;

        while (node > 0) {
            merge(node, node * 2, node * 2 + 1);
            node >>= 1;
        }
    }

    function query(l, r) {
        const lc = new Int32Array(k);
        const rc = new Int32Array(k);
        const tmp = new Int32Array(k);

        let lp = 1;
        let rp = 1;

        l += size;
        r += size;

        while (l < r) {
            if (l & 1) {
                const base = l * k;

                for (let x = 0; x < k; x++) {
                    tmp[x] = lc[x];
                }

                for (let x = 0; x < k; x++) {
                    if (cnt[base + x] === 0) continue;

                    const nr = (lp * x) % k;
                    tmp[nr] += cnt[base + x];
                }

                for (let x = 0; x < k; x++) {
                    lc[x] = tmp[x];
                }

                lp = (lp * prod[l]) % k;
                l++;
            }

            if (r & 1) {
                --r;

                const base = r * k;

                for (let x = 0; x < k; x++) {
                    tmp[x] = cnt[base + x];
                }

                for (let x = 0; x < k; x++) {
                    if (rc[x] === 0) continue;

                    const nr = (prod[r] * x) % k;
                    tmp[nr] += rc[x];
                }

                for (let x = 0; x < k; x++) {
                    rc[x] = tmp[x];
                }

                rp = (prod[r] * rp) % k;
            }

            l >>= 1;
            r >>= 1;
        }

        for (let x = 0; x < k; x++) {
            tmp[x] = lc[x];
        }

        for (let x = 0; x < k; x++) {
            if (rc[x] === 0) continue;

            const nr = (lp * x) % k;
            tmp[nr] += rc[x];
        }

        return tmp;
    }

    const answer = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const idx = queries[i][0];
        const val = queries[i][1];
        const start = queries[i][2];
        const x = queries[i][3];

        update(idx, val);

        const cur = query(start, nums.length);
        answer[i] = cur[x];
    }

    return answer;
};