#include <vector>
#include <queue>
#include <climits>
using namespace std;

class Solution {
public:
    long long minimumDifference(vector<int>& nums) {
        int n = nums.size(), k = n / 3;
        vector<long long> leftMins(n), rightMaxs(n);
        long long leftSum = 0, rightSum = 0, minDiff = LLONG_MAX;

        priority_queue<int> maxLeftHeap;
        for (int i = 0; i < k; ++i) {
            maxLeftHeap.push(nums[i]);
            leftSum += nums[i];
        }
        leftMins[k - 1] = leftSum;

        for (int i = k; i < n - k; ++i) {
            if (nums[i] < maxLeftHeap.top()) {
                leftSum += nums[i] - maxLeftHeap.top();
                maxLeftHeap.pop();
                maxLeftHeap.push(nums[i]);
            }
            leftMins[i] = leftSum;
        }

        priority_queue<int, vector<int>, greater<int>> minRightHeap;
        for (int i = n - 1; i >= n - k; --i) {
            minRightHeap.push(nums[i]);
            rightSum += nums[i];
        }
        rightMaxs[n - k] = rightSum;

        for (int i = n - k - 1; i >= k - 1; --i) {
            if (nums[i] > minRightHeap.top()) {
                rightSum += nums[i] - minRightHeap.top();
                minRightHeap.pop();
                minRightHeap.push(nums[i]);
            }
            rightMaxs[i] = rightSum;
        }

        for (int i = k - 1; i < n - k; ++i) {
            minDiff = min(minDiff, leftMins[i] - rightMaxs[i + 1]);
        }

        return minDiff;
    }
};