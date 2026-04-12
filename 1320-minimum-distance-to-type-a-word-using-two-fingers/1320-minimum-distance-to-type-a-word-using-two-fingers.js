/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const memo = new Map();

    function getDist(a, b) {
        if (a === 26 || b === 26) return 0;

        const row1 = Math.floor(a / 6);
        const col1 = a % 6;

        const row2 = Math.floor(b / 6);
        const col2 = b % 6;

        return Math.abs(row1 - row2) + Math.abs(col1 - col2);
    }

    function solve(idx, f1, f2) {
        if (idx === word.length) return 0;

        const key = `${idx},${f1},${f2}`;

        if (memo.has(key)) return memo.get(key);

        const cur = word.charCodeAt(idx) - 65;

        const useFinger1 = getDist(f1, cur) + solve(idx + 1, cur, f2);

        const useFinger2 = getDist(f2, cur) + solve(idx + 1, f1, cur);

        const ans = Math.min(useFinger1, useFinger2);

        memo.set(key, ans);
        return ans;
    }

    return solve(0, 26, 26);
};