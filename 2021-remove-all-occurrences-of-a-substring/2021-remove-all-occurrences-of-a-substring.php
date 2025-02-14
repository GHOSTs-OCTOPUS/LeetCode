class Solution {

    /**
     * @param String $s
     * @param String $part
     * @return String
     */
    function removeOccurrences($s, $part) {
        while (str_contains($s, $part)) {
            $s = preg_replace("/{$part}/", "", $s, 1);
        }
        return $s;      
    }
}