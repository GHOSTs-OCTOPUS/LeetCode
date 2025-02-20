class Solution {

    /**
     * @param String[] $nums
     * @return String
     */
    function findDifferentBinaryString($nums) {
        $n = count($nums);
        $set = array_flip($nums);
    
        for ($i = 0; $i < (1 << $n); $i++) {
            $binary = str_pad(decbin($i), $n, '0', STR_PAD_LEFT);
            if (!isset($set[$binary])) {
                return $binary;
            }
        }
    
        return "";        
    }
}