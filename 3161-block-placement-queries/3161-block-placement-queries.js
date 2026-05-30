/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function(queries) {
    const MAX_X = 50005;
    const tree = new Array(4 * MAX_X).fill(0);
    const bit = new Array(MAX_X + 1).fill(0);
    let total_obs = 0;

    function updateBit(idx, val) {
        for (; idx <= MAX_X; idx += idx & -idx) {
            bit[idx] += val;
        }
        total_obs += val;
    }

    function queryBit(idx) {
        let sum = 0;
        for (; idx > 0; idx -= idx & -idx) {
            sum += bit[idx];
        }
        return sum;
    }

    function findKth(k) {
        let idx = 0;
        for (let i = 1 << 16; i > 0; i >>= 1) {
            if (idx + i <= MAX_X && bit[idx + i] < k) {
                idx += i;
                k -= bit[idx];
            }
        }
        return idx + 1;
    }

    function updateSeg(node, start, end, idx, val) {
        if (start === end) {
            tree[node] = val;
            return;
        }
        let mid = (start + end) >> 1;
        if (idx <= mid) updateSeg(node * 2, start, mid, idx, val);
        else updateSeg(node * 2 + 1, mid + 1, end, idx, val);
        tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
    }

    function querySeg(node, start, end, l, r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        let mid = (start + end) >> 1;
        return Math.max(
            querySeg(node * 2, start, mid, l, r),
            querySeg(node * 2 + 1, mid + 1, end, l, r)
        );
    }

    updateBit(1, 1);
    updateSeg(1, 1, MAX_X, 1, 0);

    const results = [];

    for (let q of queries) {
        if (q[0] === 1) {
            let x = q[1];
            let pos = x + 1;

            let countBefore = queryBit(x);
            let prev_x = findKth(countBefore) - 1;

            let countUpTo = queryBit(pos);
            let next_x = null;
            if (countUpTo + 1 <= total_obs) {
                next_x = findKth(countUpTo + 1) - 1;
            }

            updateBit(pos, 1);
            updateSeg(1, 1, MAX_X, pos, x - prev_x);

            if (next_x !== null) {
                updateSeg(1, 1, MAX_X, next_x + 1, next_x - x);
            }
        } else {
            let x = q[1];
            let sz = q[2];

            let count = queryBit(x + 1);
            let last_obs = findKth(count) - 1;

            let max_gap_inside = querySeg(1, 1, MAX_X, 1, last_obs + 1);
            let remaining = x - last_obs;

            let total_max_gap = Math.max(max_gap_inside, remaining);
            results.push(total_max_gap >= sz);
        }
    }

    return results;
};