class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    public function punishmentNumber(int $n): int {
        if ($n < 1) { return 0; } 
        $nums = range(1, $n, 1);
        $result = 1;
        
        for ($i = 1; $i < $n; $i++) {
            $num = $nums[$i];
            $mod = ($num%9);
            if ($mod === 0 || $mod === 1) {
                $sq = (string) ($num * $num);
                $result += ($this->partition($sq, 0, [], $num)) ? (int) $sq : 0;
            }
        }
        return $result;
    }
    
    
    private function partition(string $sq, int $start, array $parts, int $num): bool {
        $n = strlen($sq);
        if ($start === $n) {
            return array_sum($parts) === $num;
        }
        
        for ($i = $start; $i < $n; $i++) {
            $part = substr($sq, $start, $i - $start + 1);
            $parts[] = (int) $part;
            if ($this->partition($sq, $i + 1, $parts, $num)) {
                return true;
            }
            array_pop($parts);
        }
        return false;
    } 
}