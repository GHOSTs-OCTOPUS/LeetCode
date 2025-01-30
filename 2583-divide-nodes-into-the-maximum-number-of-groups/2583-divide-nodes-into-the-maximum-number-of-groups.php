class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    public function magnificentSets($n, $edges) {
        $graph = array_fill(1, $n, []);

        // Step 1: Build the adjacency list
        foreach ($edges as [$u, $v]) {
            $graph[$u][] = $v;
            $graph[$v][] = $u;
        }

        // Step 2: Check if the graph is bipartite using BFS
        $color = array_fill(1, $n, -1);
        $components = [];

        for ($i = 1; $i <= $n; $i++) {
            if ($color[$i] !== -1) continue;

            $queue = [$i];
            $color[$i] = 0;
            $component = [];
            $index = 0;

            while ($index < count($queue)) {
                $node = $queue[$index++];
                $component[] = $node;

                foreach ($graph[$node] as $neighbor) {
                    if ($color[$neighbor] === -1) {
                        $color[$neighbor] = 1 - $color[$node];
                        $queue[] = $neighbor;
                    } elseif ($color[$neighbor] === $color[$node]) {
                        return -1; // Graph is not bipartite
                    }
                }
            }
            $components[] = $component;
        }

        // Step 3: Compute the sum of max depths for each component
        $totalGroups = 0;
        foreach ($components as $component) {
            $totalGroups += $this->maxBFSDepth($graph, $component);
        }

        return $totalGroups;
    }

    /**
     * Helper function to find the maximum BFS depth in a component
     * @param array $graph
     * @param array $nodes
     * @return int
     */
    private function maxBFSDepth($graph, $nodes) {
        $maxDepth = 0;

        foreach ($nodes as $start) {
            $visited = array_fill(1, count($graph), false);
            $queue = [[$start, 1]]; // [node, depth]
            $visited[$start] = true;
            $localMax = 1;

            while (!empty($queue)) {
                [$node, $depth] = array_shift($queue);
                $localMax = max($localMax, $depth);

                foreach ($graph[$node] as $neighbor) {
                    if (!$visited[$neighbor]) {
                        $visited[$neighbor] = true;
                        $queue[] = [$neighbor, $depth + 1];
                    }
                }
            }

            $maxDepth = max($maxDepth, $localMax);
        }

        return $maxDepth;
    }
}