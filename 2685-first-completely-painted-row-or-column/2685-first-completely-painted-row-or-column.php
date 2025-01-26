class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer[][] $mat
     * @return Integer
     */
    function firstCompleteIndex($arr, $mat) {
        $rowCount = count($mat);
        $colCount = count($mat[0]);
        $rows = array_fill(0, $rowCount, 0);
        $cols = array_fill(0, $colCount, 0);
        $positions = [];
        for ($i = 0; $i < $rowCount; $i++) {
            for ($j = 0; $j < $colCount; $j++) {
                $positions[$mat[$i][$j]] = [$i, $j];
            }
        }
        foreach ($arr as $i => $num) {
            [$row, $col] = $positions[$num];
            $rows[$row]++;
            $cols[$col]++;
            if ($rows[$row] == $colCount || $cols[$col] == $rowCount) {
                return $i; 
            }            
        }
        return 0;    
    }
}