/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {

    const t = new Map();
    const v = new Map();
    const n = points.length;

    function add(map, key, des) {
        if (!map.has(key)) map.set(key, new Map());
        const inner = map.get(key);
        inner.set(des, (inner.get(des) || 0) + 1);
    }

    for (let i = 0; i < n; i++) {
        let [x1, y1] = points[i];
        for (let j = i + 1; j < n; j++) {

            let [x2, y2] = points[j];
            let dx = x2 - x1;
            let dy = y2 - y1;

            if (dx < 0 || (dx === 0 && dy < 0)) {
                dx = -dx;
                dy = -dy;
            }

            let g = gcd(dx, Math.abs(dy));
            let sx = dx / g;
            let sy = dy / g;

            let des = sx * y1 - sy * x1;

            let key1 = (sx << 12) | (sy + 2000);
            let key2 = (dx << 12) | (dy + 2000);

            add(t, key1, des);
            add(v, key2, des);
        }
    }

    return count(t) - Math.floor(count(v) / 2);
};

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

function count(map) {
    let ans = 0;

    for (let inner of map.values()) {
        let total = 0;
        for (let val of inner.values()) total += val;

        let rem = total;
        for (let val of inner.values()) {
            rem -= val;
            ans += val * rem;
        }
    }
    return ans;
}