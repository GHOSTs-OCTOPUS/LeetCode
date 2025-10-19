/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const vis = new Set([s]);
    let smallest = s;
    const q = [s];

    while (q.length) {
        const cur = q.shift();
        if (cur < smallest) smallest = cur;

        let arr = cur.split('');
        for (let i = 1; i < arr.length; i += 2)
            arr[i] = ((+arr[i] + a) % 10).toString();
        const added = arr.join('');
        if (!vis.has(added)) {
            vis.add(added);
            q.push(added);
        }

        const rotated = cur.slice(-b) + cur.slice(0, -b);
        if (!vis.has(rotated)) {
            vis.add(rotated);
            q.push(rotated);
        }
    }
    return smallest;
};