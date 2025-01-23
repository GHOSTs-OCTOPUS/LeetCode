class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function countServers($grid) {
        $m = count($grid);
        $n = count($grid[0]);
        $rowCounts = array_fill(0, $m, 0);
        $colCounts = array_fill(0, $n, 0);

        // Step 1: Count servers in each row and column
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] === 1) {
                    $rowCounts[$i]++;
                    $colCounts[$j]++;
                }
            }
        }

        // Step 2: Count communicating servers
        $count = 0;
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] === 1 && ($rowCounts[$i] > 1 || $colCounts[$j] > 1)) {
                    $count++;
                }
            }
        }

        return $count;
    }
}