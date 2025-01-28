class Solution {
    private array $grid;
    private int $rows;
    private int $cols;
    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function findMaxFish($grid) {
        $this->grid = $grid;
        $this->rows = count($grid);
        $this->cols = count($grid[0]);
        $maxFish = 0;

        for ($r = 0; $r < $this->rows; $r++) {
            for ($c = 0; $c < $this->cols; $c++) {
                if ($this->grid[$r][$c] > 0) {
                    $maxFish = max($maxFish, $this->dfs($r, $c));
                }
            }
        }

        return $maxFish;
    }

    private function dfs(int $r, int $c): int {
        if ($r < 0 || $c < 0 || $r >= $this->rows || $c >= $this->cols || $this->grid[$r][$c] <= 0) {
            return 0;
        }

        $fish = $this->grid[$r][$c];
        $this->grid[$r][$c] = 0; // Mark the cell as visited

        // Explore all four directions
        $fish += $this->dfs($r + 1, $c);
        $fish += $this->dfs($r - 1, $c);
        $fish += $this->dfs($r, $c + 1);
        $fish += $this->dfs($r, $c - 1);

        return $fish;
    }
}