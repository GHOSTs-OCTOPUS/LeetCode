class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countBadPairs($nums)
    {
        $bad = 0;
        $hash = [];

        foreach ($nums as $key => $num) {

            $bad += $key;

            $diff = $key - $num;

            if (isset($hash[$diff])) {
                $bad -= $hash[$diff];
                $hash[$diff]++;
            } else {
                $hash[$diff] = 1;
            }

        }

        return $bad;
    }
}