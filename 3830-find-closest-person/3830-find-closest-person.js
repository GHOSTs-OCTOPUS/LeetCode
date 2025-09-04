/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let d1 = Math.abs(x - z);
    let d2 = Math.abs(y - z);
    
    if (d1 < d2)
        return 1;
    else if (d2 < d1)
        return 2;
    else
        return 0;
};