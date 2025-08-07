/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
    const n = fruits.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += fruits[i][i];
    }

    let rightPath = Array(3).fill(0);
    rightPath[0] = fruits[0][n - 1];

    let bottomPath = Array(3).fill(0);
    bottomPath[0] = fruits[n - 1][0];

    let window = 2;

    for (let step = 1; step < n - 1; step++) {
        const newRight = Array(window + 2).fill(0);
        const newBottom = Array(window + 2).fill(0);

        for (let dist = 0; dist < window; dist++) {
            let left = dist - 1 >= 0 ? rightPath[dist - 1] : 0;
            let mid = rightPath[dist];
            let right = dist + 1 < rightPath.length ? rightPath[dist + 1] : 0;
            newRight[dist] = Math.max(left, mid, right) + fruits[step][n - 1 - dist];

            left = dist - 1 >= 0 ? bottomPath[dist - 1] : 0;
            mid = bottomPath[dist];
            right = dist + 1 < bottomPath.length ? bottomPath[dist + 1] : 0;
            newBottom[dist] = Math.max(left, mid, right) + fruits[n - 1 - dist][step];
        }

        rightPath = newRight;
        bottomPath = newBottom;

        if (window - n + 4 + step <= 1) {
            window++;
        } else if (window - n + 3 + step > 1) {
            window--;
        }
    }

    return total + rightPath[0] + bottomPath[0];
};