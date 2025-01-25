class Solution
{

    public $nums;

    function fix($numbers, $keys)
    {
        sort($keys);
        //
        foreach ($keys as $i => $key) {
            $this->nums[$key] = $numbers[$i];
        }
    }

    /**
     * @param Integer[] $nums
     * @param Integer $limit
     * @return Integer[]
     */
    function lexicographicallySmallestArray($nums, $limit)
    {

        $this->nums = $nums;

        $temp = $nums;

        asort($temp);

        $last = current($temp);
        $numbers = [];
        $keys = [];

        foreach ($temp as $key => $num) {
            if ($num - $last > $limit) {
                if (count($numbers) > 1) {
                    $this->fix($numbers, $keys);
                }
                $numbers = [];
                $keys = [];
            }
            $numbers[] = $num;
            $keys[] = $key;
            $last = $num;
        }

        $this->fix($numbers, $keys);

        return $this->nums;
    }
}