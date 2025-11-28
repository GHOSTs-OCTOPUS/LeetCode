/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    let ans = 0;
    
    const parent = Array(n).fill(-1);
    const order = [];
    
    const stack = [0];
    parent[0] = -2;
    
    while (stack.length > 0) {
        const u = stack.pop();
        order.push(u);
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            parent[v] = u;
            stack.push(v);
        }
    }
    
    const remainder = Array(n).fill(0);
    
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        let sum = values[u] % k;
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            sum = (sum + remainder[v]) % k;
        }
        
        if (sum % k === 0) {
            ans++;
            remainder[u] = 0;
        } else {
            remainder[u] = sum;
        }
    }
    
    return ans;
};