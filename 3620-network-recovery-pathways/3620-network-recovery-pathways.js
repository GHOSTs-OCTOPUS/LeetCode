/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;
    
    let mOnline = 0;
    const outDegree = new Int32Array(n);
    
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (online[u] && online[v]) {
            outDegree[u]++;
            mOnline++;
        }
    }
    
    const head = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) {
        head[i + 1] = head[i] + outDegree[i];
    }
    
    const to = new Int32Array(mOnline);
    const weight = new Int32Array(mOnline);
    const curHead = new Int32Array(head);
    
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        if (online[u] && online[v]) {
            const idx = curHead[u]++;
            to[idx] = v;
            weight[idx] = w;
        }
    }
    
    const inDegree = new Int32Array(n);
    for (let i = 0; i < mOnline; i++) {
        inDegree[to[i]]++;
    }
    
    const order = new Int32Array(n);
    let orderIdx = 0;
    
    const q = new Int32Array(n);
    let qHead = 0, qTail = 0;
    
    for (let i = 0; i < n; i++) {
        if (online[i] && inDegree[i] === 0) {
            q[qTail++] = i;
        }
    }
    
    while (qHead < qTail) {
        const u = q[qHead++];
        order[orderIdx++] = u;
        for (let i = head[u]; i < head[u + 1]; i++) {
            const v = to[i];
            if (--inDegree[v] === 0) {
                q[qTail++] = v;
            }
        }
    }
    
    const check = (limit) => {
        const dp = new Float64Array(n);
        dp.fill(Infinity);
        dp[0] = 0;
        
        for (let i = 0; i < orderIdx; i++) {
            const u = order[i];
            if (dp[u] === Infinity) continue;
            
            for (let j = head[u]; j < head[u + 1]; j++) {
                const w = weight[j];
                if (w >= limit) {
                    const v = to[j];
                    if (dp[u] + w < dp[v]) {
                        dp[v] = dp[u] + w;
                    }
                }
            }
        }
        return dp[n - 1] <= k;
    };
    
    const uniqueCosts = new Int32Array(mOnline);
    for (let i = 0; i < mOnline; i++) uniqueCosts[i] = weight[i];
    uniqueCosts.sort(); 
    
    let uniqLen = 0;
    if (mOnline > 0) {
        uniqLen = 1;
        for (let i = 1; i < mOnline; i++) {
            if (uniqueCosts[i] !== uniqueCosts[i - 1]) {
                uniqueCosts[uniqLen++] = uniqueCosts[i];
            }
        }
    }
    
    if (!check(0)) return -1;
    
    let low = 0, high = uniqLen - 1;
    let ans = 0;
    
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (check(uniqueCosts[mid])) {
            ans = uniqueCosts[mid];
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return ans;
};