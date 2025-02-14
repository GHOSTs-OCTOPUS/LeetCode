class ProductOfNumbers {
    /**
     */
    protected $numbers;
    function __construct() {
        $this->numbers = [];
    }
  
    /**
     * @param Integer $num
     * @return NULL
     */
    function add($num) {
        $this->numbers[] = $num;
    }
  
    /**
     * @param Integer $k
     * @return Integer
     */
    function getProduct($k) {
        $kNumbers = array_slice($this->numbers, -$k);
        return array_product($kNumbers);
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * $obj = ProductOfNumbers();
 * $obj->add($num);
 * $ret_2 = $obj->getProduct($k);
 */