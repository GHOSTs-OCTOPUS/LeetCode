/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let n = img1.length;

    let pos1 = [];
    let pos2 = [];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(img1[i][j] === 1) {
                pos1.push([i, j]);
            }

            if(img2[i][j] === 1) {
                pos2.push([i, j]);
            }
        }
    }

    let res = 0;
    let map = new Map();

    for(let p1 of pos1) {
        for(let p2 of pos2) {
            let r = p2[0] - p1[0];
            let c = p2[1] - p1[1];

            let key = r + "," + c;

            map.set(key, (map.get(key) || 0) + 1);

            res = Math.max(res, map.get(key));
        }
    }

    return res;
};