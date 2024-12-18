class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        int n = prices.size();
        // Create a copy of original prices array to store discounted prices
        vector<int> result = prices;

        for (int i = 0; i < n; i++) {
            // Look for first smaller or equal price that comes after current
            // item
            for (int j = i + 1; j < n; j++) {
                if (prices[j] <= prices[i]) {
                    // Apply discount by subtracting prices[j] from current
                    // price
                    result[i] = prices[i] - prices[j];
                    break;
                }
            }
        }

        return result;
    }
};