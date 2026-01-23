/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const n = nums.length;
    if (n <= 1) 
        return 0;

    const a = nums.slice();

    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        left[i] = i - 1;
        right[i] = (i + 1 < n) ? i + 1 : -1;
    }

    class MinHeap {
        constructor() { 
            this.h = [];
        }
        push(x) {
            const h = this.h;
            h.push(x);
            let i = h.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (h[p][0] < h[i][0] || (h[p][0] === h[i][0] && h[p][1] <= h[i][1])) 
                    break;
                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        }
        pop() {
            const h = this.h;
            const res = h[0];
            const last = h.pop();
            if (h.length) {
                h[0] = last;
                let i = 0;
                while (true) {
                    let l = i * 2 + 1, r = l + 1, s = i;

                    if (l < h.length && (h[l][0] < h[s][0] || (h[l][0] === h[s][0] && h[l][1] < h[s][1]))) 
                        s = l;
                    if (r < h.length && (h[r][0] < h[s][0] || (h[r][0] === h[s][0] && h[r][1] < h[s][1]))) 
                        s = r;

                    if (s === i) 
                        break;
                    [h[s], h[i]] = [h[i], h[s]];
                    i = s;
                }
            }
            return res;
        }
        size() {
            return this.h.length;
        }
    }

    const heap = new MinHeap();
    for (let i = 0; i < n - 1; i++) {
        heap.push([a[i] + a[i + 1], i]);
    }

    let rest = 0;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] > a[i + 1]) 
            rest++;
    }

    let ans = 0;

    while (rest > 0) {
        const [v, i] = heap.pop();
        const r = right[i];

        if (r === -1) 
            continue;
        if (left[r] !== i) 
            continue;
        if (a[i] + a[r] !== v) 
            continue;

        const li = left[i];
        const rr = right[r];

        if (li !== -1 && a[li] > a[i]) 
            rest--;
        if (a[i] > a[r]) 
            rest--;
        if (rr !== -1 && a[r] > a[rr]) 
            rest--;

        a[i] = v;

        right[i] = rr;
        if (rr !== -1) 
            left[rr] = i;
        left[r] = right[r] = -1;

        if (li !== -1 && a[li] > a[i]) 
            rest++;
        if (rr !== -1 && a[i] > a[rr]) 
            rest++;

        if (li !== -1) 
            heap.push([a[li] + a[i], li]);
        if (rr !== -1) 
            heap.push([a[i] + a[rr], i]);
        ans++;
    }

    return ans;
};