/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    const groups = new RegExp(`.{1,${k}}`, 'g');  // up to k digits at a time, from the left
    while (s.length > k)
        s = s.match(groups).map(g => [...g].reduce((sum, d) => sum + +d, 0)).join('');
    return s;
};