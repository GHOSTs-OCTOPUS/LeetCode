class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function shortestCommonSupersequence($str1, $str2) {
        $m = strlen($str1);
        $n = strlen($str2);
    
        // Create DP table
        $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
    
        // Fill DP table
        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                if ($str1[$i - 1] === $str2[$j - 1]) {
                    $dp[$i][$j] = $dp[$i - 1][$j - 1] + 1;
                } 
                else {
                    $dp[$i][$j] = max($dp[$i - 1][$j], $dp[$i][$j - 1]);
                }
            }
        }
    
        // Backtrack to build the SCS string
        $i = $m; 
        $j = $n;
        $scs = "";
    
        while ($i > 0 || $j > 0) {
            if ($i > 0 && $j > 0 && $str1[$i - 1] === $str2[$j - 1]) {
                // If characters match, add to SCS
                $scs = $str1[$i - 1] . $scs;
                $i--; 
                $j--;
            } 
            elseif ($j > 0 && ($i == 0 || $dp[$i][$j - 1] >= $dp[$i - 1][$j])) {
                // If moving left in DP table
                $scs = $str2[$j - 1] . $scs;
                $j--;
            } 
            else {
                // If moving up in DP table
                $scs = $str1[$i - 1] . $scs;
                $i--;
            }
        }
    
        return $scs;         
    }
}