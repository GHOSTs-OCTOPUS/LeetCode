class Solution {
public:
    int minGroups(vector<vector<int>>& intervals) {
        // Convert the intervals to two events
        // start as {start, 1} and end as {end, -1}
        vector<pair<int, int>> intervalsWithEnd;
        for (vector<int> interval : intervals) {
            intervalsWithEnd.push_back({interval[0], 1});
            intervalsWithEnd.push_back({interval[1] + 1, -1});
        }

        // Sort the events according to the number and then by the value (1/-1).
        sort(intervalsWithEnd.begin(), intervalsWithEnd.end());

        int concurrentIntervals = 0;
        int maxConcurrentIntervals = 0;
        for (auto p : intervalsWithEnd) {
            // Keep track of currently active intersecting intervals.
            concurrentIntervals += p.second;
            // Update the maximum number of active intervals.
            maxConcurrentIntervals =
                max(maxConcurrentIntervals, concurrentIntervals);
        }

        return maxConcurrentIntervals;
    }
};