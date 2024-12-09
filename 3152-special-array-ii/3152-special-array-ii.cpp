class Solution {
public:
    vector<bool> isArraySpecial(vector<int>& nums,
                                vector<vector<int>>& queries) {
        vector<bool> ans(queries.size());
        vector<int> violatingIndices;

        for (int i = 1; i < nums.size(); i++) {
            // same parity, found violating index
            if (nums[i] % 2 == nums[i - 1] % 2) {
                violatingIndices.push_back(i);
            }
        }

        for (int i = 0; i < queries.size(); i++) {
            vector<int> query = queries[i];
            int start = query[0];
            int end = query[1];

            bool foundViolatingIndex =
                binarySearch(start + 1, end, violatingIndices);

            if (foundViolatingIndex) {
                ans[i] = false;
            } else {
                ans[i] = true;
            }
        }

        return ans;
    }

private:
    bool binarySearch(int start, int end, vector<int>& violatingIndices) {
        int left = 0;
        int right = violatingIndices.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int violatingIndex = violatingIndices[mid];

            if (violatingIndex < start) {
                // check right half
                left = mid + 1;
            } else if (violatingIndex > end) {
                // check left half
                right = mid - 1;
            } else {
                // violatingIndex falls in between start and end
                return true;
            }
        }

        return false;
    }
};