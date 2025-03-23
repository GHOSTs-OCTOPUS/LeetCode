var countPaths = function(n, roads) {
    const graph = Array.from({ length: n }, () => []);
    
    for (const [u, v, time] of roads) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    const dist = Array(n).fill(Infinity);
    const ways = Array(n).fill(0);
    
    dist[0] = 0;
    ways[0] = 1;
    
    const pq = new MinHeap();
    pq.push([0, 0]);

    const MOD = 1e9 + 7;

    while (!pq.isEmpty()) {
        const [d, node] = pq.pop();

        if (d > dist[node]) continue;

        for (const [neighbor, time] of graph[node]) {
            if (dist[node] + time < dist[neighbor]) {
                dist[neighbor] = dist[node] + time;
                ways[neighbor] = ways[node];
                pq.push([dist[neighbor], neighbor]);
            } else if (dist[node] + time === dist[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }

    return ways[n - 1];
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (2 * idx + 1 < this.heap.length) {
            let leftIdx = 2 * idx + 1, rightIdx = 2 * idx + 2;
            let smallest = leftIdx;
            if (rightIdx < this.heap.length && this.heap[rightIdx][0] < this.heap[leftIdx][0]) {
                smallest = rightIdx;
            }
            if (this.heap[idx][0] <= this.heap[smallest][0]) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}