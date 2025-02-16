class Solution {

    /**
     * @param Integer $n
     * @return Integer[]
     */
    function constructDistancedSequence($n) {
        $length = 2 * $n - 1;
        $sequence = array_fill(0, $length, 0);
        $used = array_fill(1, $n, false); // Track used numbers
    
        $this->backtrack($sequence, $used, 0, $n);
        return $sequence;       
    }
    

    public function backtrack(&$sequence, &$used, $index, $n) {
        if ($index == count($sequence)) {
            return true; // All positions filled
        }
    
        if ($sequence[$index] != 0) {
            return $this->backtrack($sequence, $used, $index + 1, $n);
        }
    
        for ($i = $n; $i >= 1; $i--) { // Start from the largest number
            if (!$used[$i]) {
                if ($i == 1) {
                    $sequence[$index] = 1;
                    $used[1] = true;
                    if ($this->backtrack($sequence, $used, $index + 1, $n)) { return true; }
                    $sequence[$index] = 0;
                    $used[1] = false;
                } 
                else {
                    $nextPos = $index + $i;
                    if ($nextPos < count($sequence) && $sequence[$nextPos] == 0) {
                        $sequence[$index] = $i;
                        $sequence[$nextPos] = $i;
                        $used[$i] = true;
    
                        if ($this->backtrack($sequence, $used, $index + 1, $n)) { return true; }
    
                        $sequence[$index] = 0;
                        $sequence[$nextPos] = 0;
                        $used[$i] = false;
                    }
                }
            }
        }
        return false;
    } 
}