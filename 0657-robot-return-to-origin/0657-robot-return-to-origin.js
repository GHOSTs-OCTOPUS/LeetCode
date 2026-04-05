/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;

    for (let m of moves) {
        if (m === 'R') x++;
        else if (m === 'L') x--;
        else if (m === 'U') y++;
        else if (m === 'D') y--;
    }

    return x === 0 && y === 0;
};