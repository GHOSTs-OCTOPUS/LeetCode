const minimumScore = (nums, edges) => {
    const n = nums.length;
    const m = edges.length;

    const graph = Array.from({ length: n }, () => []);
    const children = Array.from({ length: n }, () => new Set());
    const xor = [...nums];
    const degree = Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    let total = 0;
    const seen = new Set();
    const queue = [];

    for (let i = 0; i < n; i++) {
        total ^= nums[i];
        if (degree[i] === 1) {
            queue.push(i);
            seen.add(i);
        }
    }

    while (queue.length > 0) {
        const curr = queue.shift();
        for (const next of graph[curr]) {
            if (!seen.has(next)) {
                children[next].add(curr);
                for (const child of children[curr]) children[next].add(child);
                xor[next] ^= xor[curr];
            }
            degree[next]--;
            if (degree[next] === 1) {
                seen.add(next);
                queue.push(next);
            }
        }
    }

    let minScore = Infinity;

    for (let i = 0; i < m - 1; i++) {
        for (let j = i + 1; j < m; j++) {
            let [a, b] = edges[i];
            if (children[a].has(b)) [a, b] = [b, a];

            let [c, d] = edges[j];
            if (children[c].has(d)) [c, d] = [d, c];

            let parts;
            if (children[a].has(c)) {
                parts = [xor[c], xor[a] ^ xor[c], total ^ xor[a]];
            } else if (children[c].has(a)) {
                parts = [xor[a], xor[c] ^ xor[a], total ^ xor[c]];
            } else {
                parts = [xor[a], xor[c], total ^ xor[a] ^ xor[c]];
            }
            minScore = Math.min(minScore, Math.max(...parts) - Math.min(...parts));
        }
    }

    return minScore;
};