/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let n = fruits.length, alloted = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (fruits[i] <= baskets[j]) {
                baskets[j] = -1; // mark used
                alloted++;
                break;
            }
        }
    }
    return n - alloted;
};