class Solution {

    /**
     * @param String $s
     * @return String
     */
    function clearDigits($s) {
        $nonDigits = [];
        $alphaKey = array_flip(range('a','z'));
        for ($i = 0; $i < strlen($s); $i++) {
            if (isset($alphaKey[$s[$i]])) {
                $nonDigits[] = $s[$i];
            }
            else { array_pop($nonDigits); }
        }
        return implode('',$nonDigits);        
    }
}