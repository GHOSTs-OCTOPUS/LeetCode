/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const inf = Number.MAX_VALUE;
    const n = 26;
    const len = original.length;
    // create a n*n matrix with fully infinity values
    const dist = Array.from({length : n}, () => Array(n).fill(inf));

    for(let i = 0; i < n; i++){
        dist[i][i] = 0;
    }

    for(let i = 0; i < len; i++){
        // change character to number ('a' -> 0)
        const u = original[i].charCodeAt(0) - 97;
        const v = changed[i].charCodeAt(0) - 97;
        dist[u][v] = Math.min(dist[u][v],cost[i]);
    }
    // Floyd-Warshall
    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(dist[i][j] > dist[i][k] + dist[k][j]){
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    //compute
    let res = 0;
    for(let i = 0; i < source.length; i++){
        const u = source.charCodeAt(i) - 97;
        const v = target.charCodeAt(i) - 97;
        if(dist[u][v] === inf)  return -1;
        res += dist[u][v];
    }
    return res;
};