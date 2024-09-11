class Solution {
public:
    int minBitFlips(int start, int goal) {
        int count = 0;
        while (start > 0 || goal > 0) {
            // Increment count if the current bits differ
            if ((start & 1) != (goal & 1)) {
                count++;
            }
            // Shift both numbers to the right to check the next bits
            start >>= 1;
            goal >>= 1;
        }
        return count;
    }
};