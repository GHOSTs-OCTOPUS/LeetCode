class Solution {

    /**
     * @param String $tiles
     * @return Integer
     */
    public function numTilePossibilities(string $tiles): int {
        if (strlen($tiles) === 1) { return 1; }
        $letters = str_split($tiles);
        sort($letters);
        $result = [];
        $used = array_fill(0, count($letters), false);
        $this->backtrack($letters, [], $used, $result);
        return count($result);
    }
    
    private function backtrack(array $letters, array $path, array &$used, array &$result): void {
        if (!empty($path)) {
            $result[] = $path;
        }
        
        for ($i = 0; $i < count($letters); $i++) {
            if ($used[$i]) { continue; }
            //$used[] = $letters;
            if ($i > 0 && $letters[$i] === $letters[$i - 1] && !$used[$i - 1]) { continue; }
            $used[$i] = true;
            $path[] = $letters[$i];
            $this->backtrack($letters, $path, $used, $result);
            array_pop($path);
            $used[$i] = false;
        }
    }
}