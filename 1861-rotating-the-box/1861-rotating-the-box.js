/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {

    const rows = box.length;
    const cols = box[0].length;

    // Apply gravity
    for (let r = 0; r < rows; r++) {

        let empty = cols - 1;

        for (let c = cols - 1; c >= 0; c--) {

            // Obstacle
            if (box[r][c] === '*') {
                empty = c - 1;
            }

            // Stone
            else if (box[r][c] === '#') {

                [box[r][c], box[r][empty]] =
                [box[r][empty], box[r][c]];

                empty--;
            }
        }
    }

    // Rotate matrix
    const ans = Array.from(
        { length: cols },
        () => Array(rows)
    );

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            ans[c][rows - 1 - r] = box[r][c];
        }
    }

    return ans;
};