class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer[]
     */
    function eventualSafeNodes($graph) {
        $revert = array_fill(0, count($graph), []);
        $safeNodes = [];

        // Build the reverse graph
        foreach ($graph as $i => $nodes) {
            foreach ($nodes as $n) {
                $revert[$n][] = $i;
            }
        }

        // Count outgoing edges for each node
        $counts = array_map('count', $graph);

        // Initialize the queue with nodes having no outgoing edges
        $queue = [];
        foreach ($counts as $i => $v) {
            if ($v === 0) {
                $queue[] = $i;
            }
        }

        // Process the queue
        while (!empty($queue)) {
            $node = array_shift($queue);
            $safeNodes[] = $node;

            foreach ($revert[$node] as $a) {
                $counts[$a]--;
                if ($counts[$a] === 0) {
                    $queue[] = $a;
                }
            }
        }

        // Sort safe nodes in ascending order
        sort($safeNodes);
        return $safeNodes;
    }
}