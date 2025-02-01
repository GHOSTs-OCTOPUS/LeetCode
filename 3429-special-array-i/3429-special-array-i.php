class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isArraySpecial($nums) {
        
        if (count($nums) === 1) {
            return true;    
        }

        for ($i = 1; $i < count($nums); $i++) {
            if (($nums[$i] & 1) === ($nums[$i - 1] & 1)) {
                return false;
            }
        }
        return true;
    }
}