class Solution {
public:
    char findKthBit(int n, int k) {
        string sequence = "0";

        // Generate sequence until we have enough elements or reach nth
        // iteration
        for (int i = 1; i < n && k > sequence.length(); ++i) {
            sequence += '1';

            // Append the inverted and reversed part of the existing sequence
            string temp = sequence;
            for (int j = temp.length() - 2; j >= 0; --j) {
                char invertedBit = (temp[j] == '1') ? '0' : '1';
                sequence += invertedBit;
            }
        }

        // Return the kth bit
        return sequence[k - 1];
    }
};