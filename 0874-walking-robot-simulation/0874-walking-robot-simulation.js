/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const st = new Set();

    for (const [x, y] of obstacles) {
        st.add(`${x},${y}`);
    }

    const dir = [[0,1], [1,0], [0,-1], [-1,0]];

    let x = 0, y = 0, d = 0, maxDist = 0;

    for (const cmd of commands) {
        if (cmd === -1) d = (d + 1) % 4;
        else if (cmd === -2) d = (d + 3) % 4;
        else {
            for (let i = 0; i < cmd; i++) {
                const nx = x + dir[d][0];
                const ny = y + dir[d][1];

                if (st.has(`${nx},${ny}`)) break;

                x = nx;
                y = ny;
                maxDist = Math.max(maxDist, x*x + y*y);
            }
        }
    }

    return maxDist;
};