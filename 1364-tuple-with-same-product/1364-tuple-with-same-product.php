class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function tupleSameProduct($nums) {
                $length = count($nums);
        $productMap = [];
        for ($i = 0; $i < $length; $i++) {
            for($j = $i + 1; $j < $length; $j++) {
                $product = $nums[$i] * $nums[$j];
                if (empty($productMap[$product])) {
                    $productMap[$product] = 1;
                } else {
                    $productMap[$product] +=1;
                }
            }
        }

        $result = 0;

        foreach ($productMap as $occurrences) {
            $result += 8 * (($occurrences * ($occurrences - 1)) / 2);
        }

        return $result;
    }
}