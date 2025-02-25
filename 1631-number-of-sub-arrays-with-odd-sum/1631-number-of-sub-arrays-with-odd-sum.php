class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function numOfSubarrays($arr) {
        $reducer = 1000000007;
        $oddCount = 0;
        $evenCount = 1;
        $prefixSum = 0;
        $result = 0;
        
        foreach ($arr as $num) {
            $prefixSum += $num;
            if ($prefixSum % 2 === 1) {
                $result = ($result + $evenCount) % $reducer;
                $oddCount++;
            }
            else {
                $result = ($result + $oddCount) % $reducer;
                $evenCount++;
            }
        }
        return $result;        
    }
}