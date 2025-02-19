class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    private $letters = ['a','b','c'];
    private $count  = 0;
    private $n = 1;
    private $k = 1;
    public function getHappyString(int $n, int $k): ?string {
        $this->n = $n;
        $this->k = $k;
        $count = 0;
        $result = $this->backtrack("");
        
        return $result !== null ? $result : "";
    }
    
    private function backtrack(string $current): ?string {
        if (strlen($current) === $this->n) {
            $this->count++;
            if ($this->count === $this->k) {
                return $current;
            }
            return null;
        }
        
        foreach ($this->letters as $letter) {
            if (empty($current) || $current[strlen($current) - 1] !== $letter) {
                $result = $this->backtrack($current.$letter);
                if ($result !== null) {
                    return $result;
                }
            }
        }
        return null;
    }
}