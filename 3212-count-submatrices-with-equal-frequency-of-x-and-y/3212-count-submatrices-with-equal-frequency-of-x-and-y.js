/**
 * @param {character[][]} grid
 * @return {number}
 */
const numberOfSubmatrices = grid => {
    const rows = grid.length;
    const cols = grid[0].length;
    const sumX = new Int32Array(cols);
    const sumY = new Int32Array(cols);
    let res = 0;

    for (let i = 0; i < rows; i++) {
        let rx = 0;
        let ry = 0;

        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'X')
                rx++;
            else if (grid[i][j] === 'Y')
                ry++;

            sumX[j] += rx;
            sumY[j] += ry;

            if (sumX[j] > 0 && sumX[j] === sumY[j])
                res++;
        }
    }

    return res;
};