/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const mod = 10**9 + 7;
    let zero = 0;
    let one = 0;
    let two = 1;
    
    for (let i of corridor) {
        if (i === 'S') {
            zero = one;
            [one, two] = [two, one];
        } else {
            two = (two + zero) % mod;
        }
    }
    return zero;
};