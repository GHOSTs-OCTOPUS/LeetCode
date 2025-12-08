const countTriples = n => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);    
    
    let res = 0;
    for (let u = 2; u * u <= n; u++) {
        for (let v = 1; v < u; v++) {
            if (~(u - v) & 1 || gcd(u, v) !== 1) continue;
            const c = u * u + v * v;
            if (c > n) continue;
            res += parseInt(n / c) << 1;
        }
    }
    return res;
};
