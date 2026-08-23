/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    let diff = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const firstHalf = i < n / 2;

        if (num[i] === '?') {
            count += firstHalf ? 1 : -1;
        } else {
            const digit = Number(num[i]);
            diff += firstHalf ? digit : -digit;
        }
    }

    return 2 * diff !== -9 * count;
};