class Solution {

    /**
     * @param String[] $words
     * @param String $target
     * @return Integer
     */
    function numWays($words, $target) {
        $mod = 1000000007;
        $m = count($words);
        $n = strlen($words[0]);
        $tLen = strlen($target);

        // Step 1: Precompute character frequency at each column of words
        $freq = array_fill(0, $n, array_fill(0, 26, 0));
        foreach ($words as $word) {
            for ($i = 0; $i < $n; $i++) {
                $freq[$i][ord($word[$i]) - ord('a')]++;
            }
        }

        // Step 2: Initialize DP table
        $dp = array_fill(0, $tLen + 1, array_fill(0, $n + 1, 0));
        for ($j = 0; $j <= $n; $j++) {
            $dp[0][$j] = 1; // There's 1 way to form an empty target
        }

        // Step 3: Fill DP table
        for ($i = 1; $i <= $tLen; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                $dp[$i][$j] = $dp[$i][$j - 1]; // Exclude the current column
                $charIndex = ord($target[$i - 1]) - ord('a');
                if ($freq[$j - 1][$charIndex] > 0) {
                    $dp[$i][$j] += ($dp[$i - 1][$j - 1] * $freq[$j - 1][$charIndex]) % $mod;
                    $dp[$i][$j] %= $mod;
                }
            }
        }

        return $dp[$tLen][$n];
    }
}