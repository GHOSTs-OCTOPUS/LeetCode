/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let i = 0, j = directions.length - 1;
    while (i < directions.length && directions[i] === 'L') i++;
    while (j >= 0 && directions[j] === 'R') j--;
    let count = 0;
    for (let k = i; k <= j; k++) 
        if (directions[k] !== 'S') count++;
    return count;
};