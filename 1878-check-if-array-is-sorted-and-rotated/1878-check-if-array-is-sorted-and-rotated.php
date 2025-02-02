class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function check($nums) {
        $n = count($nums);
        $startIndex = 0;
        $longer = array_merge($nums, $nums);
        for ($i = 1; $i < $n; $i++) {
            if ($nums[$i] < $nums[$i-1]) {
                $startIndex = $i;
                break;
            }
        }
        for ($x = $startIndex+1; $x < $n+$startIndex; $x++) {
            if ($longer[$x-1] > $longer[$x]) { return false; }
        }
        return true;        
    }
}