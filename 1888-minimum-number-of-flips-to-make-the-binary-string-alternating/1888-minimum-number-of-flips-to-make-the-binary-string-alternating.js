/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    let n = s.length;
    let ss = s + s;

    let ans = Infinity;
    let diff1 = 0, diff2 = 0;

    for(let i = 0; i < ss.length; i++){

        let exp1 = (i % 2 === 0) ? '0' : '1';
        let exp2 = (i % 2 === 0) ? '1' : '0';

        if(ss[i] !== exp1) diff1++;
        if(ss[i] !== exp2) diff2++;

        if(i >= n){
            let p1 = ((i-n) % 2 === 0) ? '0' : '1';
            let p2 = ((i-n) % 2 === 0) ? '1' : '0';

            if(ss[i-n] !== p1) diff1--;
            if(ss[i-n] !== p2) diff2--;
        }

        if(i >= n-1){
            ans = Math.min(ans, diff1, diff2);
        }
    }

    return ans;
};