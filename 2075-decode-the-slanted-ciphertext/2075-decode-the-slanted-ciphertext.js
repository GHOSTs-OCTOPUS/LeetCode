/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    if (rows === 1) return encodedText;

    const n = encodedText.length;
    const cols = Math.floor(n / rows);

    let matrix = Array.from({ length: rows }, () => Array(cols));

    let idx = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = encodedText[idx++];
        }
    }

    let res = "";

    for (let startCol = 0; startCol < cols; startCol++) {
        let r = 0, c = startCol;
        while (r < rows && c < cols) {
            res += matrix[r][c];
            r++;
            c++;
        }
    }

    return res.trimEnd();
};