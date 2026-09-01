/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;

    const litter = [];
    let sr = 0;
    let sc = 0;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (classroom[i][j] === 'S') {
                sr = i;
                sc = j;
            } else if (classroom[i][j] === 'L') {
                litter.push([i, j]);
            }
        }
    }

    const k = litter.length;

    if (k === 0)
        return 0;

    const id = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    for (let i = 0; i < k; ++i) {
        const [r, c] = litter[i];
        id[r][c] = i;
    }

    const totalMask = 1 << k;
    const cells = m * n;

    const best = new Int16Array(totalMask * cells);
    best.fill(-1);

    const queue = [[sr, sc, 0, energy]];
    let head = 0;

    best[sr * n + sc] = energy;

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    let moves = 0;

    while (head < queue.length) {
        const end = queue.length;

        while (head < end) {
            const [r, c, mask, e] = queue[head++];

            if (mask === totalMask - 1)
                return moves;

            if (e === 0)
                continue;

            for (let d = 0; d < 4; ++d) {
                const nr = r + dr[d];
                const nc = c + dc[d];

                if (
                    nr < 0 || nr >= m ||
                    nc < 0 || nc >= n
                )
                    continue;

                if (classroom[nr][nc] === 'X')
                    continue;

                let ne = e - 1;
                let nmask = mask;

                if (classroom[nr][nc] === 'R')
                    ne = energy;

                if (id[nr][nc] !== -1)
                    nmask |= 1 << id[nr][nc];

                const pos = nr * n + nc;
                const idx = nmask * cells + pos;

                if (best[idx] >= ne)
                    continue;

                best[idx] = ne;
                queue.push([nr, nc, nmask, ne]);
            }
        }

        moves++;
    }

    return -1;
};