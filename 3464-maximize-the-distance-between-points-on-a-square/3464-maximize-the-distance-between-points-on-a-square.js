/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(side, points, k) {
    const n = points.length;
    const pos = new Array(n);
    for (let i = 0; i < n; i++){
        const [x, y] = points[i];
        let p;
        if (y === 0) {
            p = x;
        } else if (x === side) {
            p = side + y;
        } else if (y === side) {
            p = 2 * side + (side - x);
        } else {
            p = 3 * side + (side - y);
        }
        pos[i] = p;
    }
    pos.sort((a, b) => a - b);
    const L = 4 * side;
    const total = n * 2;
    const ext = new Array(total);
    for (let i = 0; i < n; i++){
        ext[i] = pos[i];
        ext[i+n] = pos[i] + L;
    }
    
    const canPlace = function(d) {
        for (let start = 0; start < n; start++){
            let cur = start;
            let last = ext[start];
            let valid = true;
            const limit = start + n;
            for (let step = 1; step < k; step++){
                const target = last + d;
                let lo = cur + 1, hi = limit;
                while (lo < hi) {
                    const mid = Math.floor((lo + hi) / 2);
                    if (ext[mid] < target)
                        lo = mid + 1;
                    else
                        hi = mid;
                }
                if (lo === limit) {
                    valid = false;
                    break;
                }
                cur = lo;
                last = ext[cur];
            }
            if (valid && (ext[start] + L - last >= d))
                return true;
        }
        return false;
    }
    
    let low = 0, high = 2 * side;
    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (canPlace(mid))
            low = mid;
        else
            high = mid - 1;
    }
    return low;
};