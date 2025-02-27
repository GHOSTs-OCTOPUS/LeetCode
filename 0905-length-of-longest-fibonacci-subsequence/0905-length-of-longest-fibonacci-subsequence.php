class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function lenLongestFibSubseq($arr) {
        $n = count($arr);
        if ($n < 4) { return 0; }
        $longest = 0;
        $keys = array_flip($arr);
        
        for ($i = 0; $i < $n; $i++) {
            $first = $arr[$i];
            for ($j = $i + 1; $j < $n; $j++) {
                $second = $arr[$j];
                $seq = 2;
                $a = $first;
                $b = $second;
                while (isset($keys[$a + $b])) {
                    $next = $a + $b;
                    $a = $b;
                    $b = $next;
                    $seq++;
                }
                if ($seq > 2) {
                    $longest = max($longest, $seq);
                }
            }
        }
        return $longest;        
    }
}