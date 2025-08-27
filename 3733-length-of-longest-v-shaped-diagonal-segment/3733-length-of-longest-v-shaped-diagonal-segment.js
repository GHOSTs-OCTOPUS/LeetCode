/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
    const n = grid.length, m = grid[0].length;
    const dirs = [[1,1],[1,-1],[-1,-1],[-1,1]];
    const clockwise = [1,2,3,0];
    const expectVal = [1,2,0];
    const nextPhase = [1,2,1];

    const totalStates = n*m*4*3;
    const dpTurned = new Uint16Array(totalStates);
    const dpNoTurn = new Uint16Array(totalStates);
    const idx = (r,c,d,p) => (((r*m + c) * 4 + d) * 3 + p);

    // Neighbour precompute: straight & clockwise dirs, with row/col split
    const nsRow = new Int16Array(n*m*4);
    const nsCol = new Int16Array(n*m*4);
    const ntRow = new Int16Array(n*m*4);
    const ntCol = new Int16Array(n*m*4);
    const ntDir = new Int8Array(n*m*4);

    for (let r=0; r<n; r++) for (let c=0; c<m; c++) {
        for (let d=0; d<4; d++) {
            const [dr,dc] = dirs[d];
            const nr = r+dr, nc = c+dc;
            const off = (r*m + c)*4 + d;
            if (nr>=0 && nr<n && nc>=0 && nc<m) { nsRow[off]=nr; nsCol[off]=nc; }
            else { nsRow[off]=-1; nsCol[off]=-1; }

            const ndir = clockwise[d], [tr,tc] = dirs[ndir];
            const rr = r+tr, cc = c+tc;
            if (rr>=0 && rr<n && cc>=0 && cc<m) {
                ntRow[off]=rr; ntCol[off]=cc; ntDir[off]=ndir;
            } else {
                ntRow[off]=-1; ntCol[off]=-1; ntDir[off]=-1;
            }
        }
    }

    // Precompute row/col iteration order per direction
    const rowOrder = Array.from({length:4},()=>[]);
    const colOrder = Array.from({length:4},()=>[]);
    for (let d=0; d<4; d++) {
        const [dr,dc] = dirs[d];
        rowOrder[d] = dr===1 ? [...Array(n).keys()].reverse() : [...Array(n).keys()];
        colOrder[d] = dc===1 ? [...Array(m).keys()].reverse() : [...Array(m).keys()];
    }

    // Pass 1: dpTurned (turn already used → straight only)
    for (let d=0; d<4; d++) {
        for (const r of rowOrder[d]) for (const c of colOrder[d]) {
            for (let p=0; p<3; p++) if (grid[r][c] === expectVal[p]) {
                const nr = nsRow[(r*m+c)*4+d];
                if (nr>=0) {
                    const nc = nsCol[(r*m+c)*4+d];
                    dpTurned[idx(r,c,d,p)] = 1 + dpTurned[idx(nr,nc,d,nextPhase[p])];
                } else {
                    dpTurned[idx(r,c,d,p)] = 1;
                }
            }
        }
    }

    // Pass 2: dpNoTurn (may turn now or later)
    for (let d=0; d<4; d++) {
        for (const r of rowOrder[d]) for (const c of colOrder[d]) {
            for (let p=0; p<3; p++) if (grid[r][c] === expectVal[p]) {
                const nr = nsRow[(r*m+c)*4+d];
                let best = nr>=0 ? 1 + dpNoTurn[idx(nr,nsCol[(r*m+c)*4+d],d,nextPhase[p])] : 1;

                const rr = ntRow[(r*m+c)*4+d];
                if (rr>=0) {
                    const cc = ntCol[(r*m+c)*4+d], ndir = ntDir[(r*m+c)*4+d];
                    best = Math.max(best, 1 + dpTurned[idx(rr,cc,ndir,nextPhase[p])]);
                }
                dpNoTurn[idx(r,c,d,p)] = best;
            }
        }
    }

    // Result: only start with phase=0 (expect 1), no turn used
    let ans = 0;
    for (let r=0; r<n; r++) for (let c=0; c<m; c++) if (grid[r][c] === 1) {
        for (let d=0; d<4; d++) {
            ans = Math.max(ans, dpNoTurn[idx(r,c,d,0)]);
        }
    }
    return ans;
};