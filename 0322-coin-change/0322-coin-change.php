class Solution {

    /**
     * @param Integer[] $coins
     * @param Integer $amount
     * @return Integer
     */
    function coinChange($coins, $amount) {
        // Initialize the dp array with a large value (infinity)
        $dp = array_fill(0, $amount + 1, PHP_INT_MAX);
        
        // Base case: 0 amount requires 0 coins
        $dp[0] = 0;
        
        // Iterate over all coins
        foreach ($coins as $coin) {
            // Update the dp array for all amounts >= coin
            for ($i = $coin; $i <= $amount; $i++) {
                if ($dp[$i - $coin] != PHP_INT_MAX) {
                    $dp[$i] = min($dp[$i], $dp[$i - $coin] + 1);
                }
            }
        }
        
        // If dp[amount] is still PHP_INT_MAX, it means we can't form the amount
        return $dp[$amount] == PHP_INT_MAX ? -1 : $dp[$amount];
    }
}