/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let xs = [], events = [];

    for (let [x, y, l] of squares) {
        xs.push(x, x + l);
        events.push([y, 1, x, x + l]);
        events.push([y + l, -1, x, x + l]);
    }

    xs = [...new Set(xs)].sort((a,b)=>a-b);
    events.sort((a,b)=>a[0]-b[0]);

    let idx = new Map();
    xs.forEach((v,i)=>idx.set(v,i));

    let n = xs.length;
    let cnt = Array(4*n).fill(0);
    let seg = Array(4*n).fill(0);

    function update(node, l, r, ql, qr, val) {
        if (qr <= l || r <= ql) return;
        if (ql <= l && r <= qr) cnt[node] += val;
        else {
            let m = (l+r)>>1;
            update(node<<1, l, m, ql, qr, val);
            update(node<<1|1, m, r, ql, qr, val);
        }

        if (cnt[node] > 0) seg[node] = xs[r] - xs[l];
        else if (r - l === 1) seg[node] = 0;
        else seg[node] = seg[node<<1] + seg[node<<1|1];
    }

    let total = 0, prevY = events[0][0], strips = [];

    for (let [y,t,x1,x2] of events) {
        if (y > prevY) {
            let h = y - prevY;
            let w = seg[1];
            total += w * h;
            strips.push([prevY, h, w]);
            prevY = y;
        }
        update(1, 0, n-1, idx.get(x1), idx.get(x2), t);
    }

    let half = total / 2, acc = 0;
    for (let [y,h,w] of strips) {
        if (acc + h*w >= half) return y + (half - acc)/w;
        acc += h*w;
    }
    return 0;
};