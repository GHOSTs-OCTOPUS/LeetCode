/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const n = points.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let top = points[i][1];
        let bot = -Infinity;
        for (let j = i + 1; j < n; j++) {
            let y = points[j][1];
            if (bot < y && y <= top) {
                result++;
                bot = y;
                if (bot === top) break;
            }
        }
    }
    return result;
};