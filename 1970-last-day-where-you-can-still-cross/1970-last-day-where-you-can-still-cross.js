const latestDayToCross = (row, col, cells) => {
    const dsu = new DSU(row * col + 2);
    const grid = Array.from({ length: row }, () => Array(col).fill(0));
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

    for (let i = 0; i < row * col; i++) {
        const r = cells[i][0] - 1, c = cells[i][1] - 1;
        grid[r][c] = 1;
        const id1 = r * col + c + 1;

        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < row && nc >= 0 && nc < col && grid[nr][nc] === 1) {
                const id2 = nr * col + nc + 1;
                dsu.union(id1, id2);
            }
        }

        if (c === 0) dsu.union(0, id1);
        if (c === col - 1) dsu.union(row * col + 1, id1);

        if (dsu.find(0) === dsu.find(row * col + 1))
            return i;
    }
    return -1;
};

class DSU {
    constructor(n) {
        this.root = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        if (this.root[x] !== x)
            this.root[x] = this.find(this.root[x]);
        return this.root[x];
    }

    union(x, y) {
        let rx = this.find(x), ry = this.find(y);
        if (rx === ry) return;
        if (this.size[rx] > this.size[ry])
            [rx, ry] = [ry, rx];
        this.root[rx] = ry;
        this.size[ry] += this.size[rx];
    }
}
