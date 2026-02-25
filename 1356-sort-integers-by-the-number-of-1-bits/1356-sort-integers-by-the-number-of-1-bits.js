/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countBits = (x) => {
        let c = 0;
        while(x > 0){
            if(x & 1) c++;
            x >>= 1;
        }
        return c;
    }

    arr.sort((a,b)=>{
        let bitsA = countBits(a);
        let bitsB = countBits(b);
        if(bitsA === bitsB) return a - b;
        return bitsA - bitsB;
    });

    return arr;
};