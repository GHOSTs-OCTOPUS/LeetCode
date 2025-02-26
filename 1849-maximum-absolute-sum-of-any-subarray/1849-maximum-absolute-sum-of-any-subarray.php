class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxAbsoluteSum($nums) {
        $maxSum = 0;
        $minSum = 0;
        $currMax = 0;
        $currMin = 0;
        
        foreach ($nums as $num) {            
            $currMax = max($num, $currMax + $num);
            $maxSum = max($maxSum, $currMax);
            
            $currMin = min($num, $currMin + $num);
            $minSum = min($minSum, $currMin);
        }
        return max($maxSum, abs($minSum));        
    }
}