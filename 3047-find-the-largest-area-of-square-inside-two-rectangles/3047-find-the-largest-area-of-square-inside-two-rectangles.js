const largestSquareArea = (bl, tr) => {
    let s = 0;
    const n = bl.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const minX = Math.max(bl[i][0], bl[j][0]);
            const maxX = Math.min(tr[i][0], tr[j][0]);
            const minY = Math.max(bl[i][1], bl[j][1]);
            const maxY = Math.min(tr[i][1], tr[j][1]);

            const len = Math.min(maxX - minX, maxY - minY);
            s = Math.max(s, len);
        }
    }

    return s * s;
};
