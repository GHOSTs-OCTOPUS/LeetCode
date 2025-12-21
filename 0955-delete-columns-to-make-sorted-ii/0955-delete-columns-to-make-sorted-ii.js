/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;

    // resolved[i] => strs[i] < strs[i+1] already determined
    const resolved = new Array(n - 1).fill(false);
    let unresolved = n - 1;
    let deletions = 0;

    for (let col = 0; col < m && unresolved > 0; col++) {
        let needDelete = false;

        // Check ordering violation
        for (let row = 0; row < n - 1; row++) {
            if (!resolved[row] && strs[row][col] > strs[row + 1][col]) {
                needDelete = true;
                break;
            }
        }

        if (needDelete) {
            deletions++;
            continue;
        }

        // Mark resolved row pairs
        for (let row = 0; row < n - 1; row++) {
            if (!resolved[row] && strs[row][col] < strs[row + 1][col]) {
                resolved[row] = true;
                unresolved--;
            }
        }
    }

    return deletions;
};