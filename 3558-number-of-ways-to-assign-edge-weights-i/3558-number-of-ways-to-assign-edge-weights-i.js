/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const n = edges.length + 1;

    const adj = Array.from( { length: n + 1 }, () => [] );
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const q = [1];
    const depth = new Array( n + 1 ).fill( -1 );
    depth[1] = 0;

    let head = 0;
    let maxDepth = 0;
    
    while ( head < q.length ) {
        const curr = q[head++];
        maxDepth = Math.max( maxDepth, depth[curr] );

        for ( const neighbor of adj[curr] ) {
            if ( depth[neighbor] === -1 ) {
                depth[neighbor] = depth[curr] + 1;
                q.push( neighbor );
            }
        }
    }

    const MOD = 1000000007;

    function modPow( base, exp, mod ) {
        let res = 1n;
        let b = BigInt( base ) % BigInt( mod );
        let e = BigInt( exp );
        const m = BigInt( mod );

        while ( e > 0n ) {
            if ( e % 2n === 1n ) {
                res = ( res * b ) % m;
            }

            b = ( b * b ) % m;
            e = e / 2n;
        }

        return Number ( res );
    }

    return modPow ( 2, maxDepth - 1, MOD );
};