class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function largestIsland($grid) {
               $n = count($grid);
        if ($n == 0) return 0;

        $islandSizes = [0];
        $islandId = 2;

       

        for ($r = 0; $r < $n; $r++) {
            for ($c = 0; $c < $n; $c++) {
                if ($grid[$r][$c] == 1) {
                    $size = $this->dfs($grid, $r, $c, $islandId, $n);
                    $islandSizes[$islandId] = $size;
                    $islandId++;
                }
            }
        }

        $maxSize = max($islandSizes);

        for ($r = 0; $r < $n; $r++) {
            for ($c = 0; $c < $n; $c++) {
                if ($grid[$r][$c] == 0) {
                    $uniqueIslands = [];
                    $directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

                    foreach ($directions as $direction) {
                        $nr = $r + $direction[0];
                        $nc = $c + $direction[1];

                        if ($nr >= 0 && $nr < $n && $nc >= 0 && $nc < $n && $grid[$nr][$nc] > 1) {
                            $uniqueIslands[$grid[$nr][$nc]] = true;
                        }
                    }

                    $newSize = 1;
                    foreach (array_keys($uniqueIslands) as $island) {
                        $newSize += $islandSizes[$island];
                    }

                    $maxSize = max($maxSize, $newSize);
                }
            }
        }

        return $maxSize;
    }
    
    private  function dfs(&$grid, $r, $c, $islandId, $n) {
        if ($r < 0 || $c < 0 || $r >= $n || $c >= $n || $grid[$r][$c] != 1) {
            return 0;
        }

        $grid[$r][$c] = $islandId;
        $size = 1;

        $directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        foreach ($directions as $direction) {
            $size += $this->dfs($grid, $r + $direction[0], $c + $direction[1], $islandId, $n);
        }
        return $size;
    }
}