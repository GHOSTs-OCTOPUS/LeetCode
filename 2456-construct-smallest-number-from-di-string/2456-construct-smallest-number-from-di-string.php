class Solution {

    /**
     * @param String $pattern
     * @return String
     */
    function smallestNumber($pattern) {
        $n = strlen($pattern);
        $stack = [];
        $result = [];
    
        for ($i = 0; $i <= $n; $i++) {
            // Start collecting numbers from 1.
            $stack[] = $i + 1;     
            // When we reach the end or find 'I', we pop from the stack and append to result.
            if ($i === $n || $pattern[$i] === 'I') {
                while (!empty($stack)) {
                    $result[] = array_pop($stack);
                }
            }
        }
    
        return implode('', $result);       
    }
}