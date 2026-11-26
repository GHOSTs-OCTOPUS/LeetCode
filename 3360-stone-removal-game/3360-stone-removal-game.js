/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    const missing = 55 - n;  // stones short of playing all ten moves
    const unplayed = Math.round(Math.sqrt(2 * missing));  // smallest j with 1 + 2 + ... + j >= missing
    return unplayed % 2 === 1;  // 10 - unplayed moves were played: odd means Alice moved last
};