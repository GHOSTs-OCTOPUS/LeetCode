class Solution {

    public int chalkReplacer(int[] chalk, int k) {
        // Find the sum of all elements.
        long sum = 0;
        for (int i = 0; i < chalk.length; i++) {
            sum += chalk[i];
            if (sum > k) {
                break;
            }
        }
        // Find modulo of k with sum.
        k = k % (int) sum;
        for (int i = 0; i < chalk.length; i++) {
            if (k < chalk[i]) {
                return i;
            }
            k = k - chalk[i];
        }
        return 0;
    }
}