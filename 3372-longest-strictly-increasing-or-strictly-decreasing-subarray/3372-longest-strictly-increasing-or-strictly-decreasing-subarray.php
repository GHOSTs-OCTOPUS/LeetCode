class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestMonotonicSubarray($nums) {
        $n = count($nums);
        $max = 1;
        $currDec = 1;
        $currInc = 1;
        if ($n < 2) { return $n; }
        for ($i = 1; $i < $n; $i++) {
            if ($nums[$i-1] < $nums[$i]) {
                $currInc++;
                $max = max($max, $currInc);
                $currDec = 1;
            }
            elseif ($nums[$i-1] > $nums[$i]) {
                $currDec++;
                $max = max($max, $currDec);
                $currInc = 1;
            } 
            else {
                $currInc = 1;
                $currDec = 1;
            }
        }
        return $max;    
    }
}