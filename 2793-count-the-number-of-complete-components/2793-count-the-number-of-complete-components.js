var countCompleteComponents = function(n, edges) {
    let parent = Array.from({ length: n }, (_, i) => i);
    let rank = Array(n).fill(0);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        if (rootX === rootY) return;

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    };

    for (let [u, v] of edges) {
        union(u, v);
    }

    let componentVertices = new Map();
    let componentEdges = new Map();

    for (let i = 0; i < n; i++) {
        let root = find(i);
        if (!componentVertices.has(root)) {
            componentVertices.set(root, new Set());
            componentEdges.set(root, 0);
        }
        componentVertices.get(root).add(i);
    }

    for (let [u, v] of edges) {
        let root = find(u);
        componentEdges.set(root, (componentEdges.get(root) || 0) + 1);
    }

    let completeCount = 0;
    for (let [root, vertices] of componentVertices) {
        let numVertices = vertices.size;
        let expectedEdges = (numVertices * (numVertices - 1)) / 2;

        if ((componentEdges.get(root) || 0) === expectedEdges) {
            completeCount++;
        }
    }

    return completeCount;
};