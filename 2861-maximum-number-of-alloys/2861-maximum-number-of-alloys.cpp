class Solution {
public:
     bool isPossible(int n, int k, int budget, vector<vector<int>> &composition, vector<int> &stock, vector<int> &costs, int fixed_alloy) {
        for (int i = 0; i < k; i++) {
            long long calBudget = 0;
            for (int j = 0; j < n; j++) {
                long long required = 1LL*composition[i][j]*fixed_alloy;
                required -= stock[j];
                if (required > 0)
                    calBudget += 1LL*required*costs[j];
            }
            if (calBudget <= 1LL*budget) return true;
        }
        return false;
    }

    int maxNumberOfAlloys(int n, int k, int budget, vector<vector<int>>& composition, vector<int>& stock, vector<int>& cost) {
        int low = 1, high = 1e9;
        int ans = 0; // intialise the ans = 0;

        while (low <= high) {
            int mid = low + (high-low)/2;
            if (isPossible(n, k, budget, composition, stock, cost, mid)) {
                low = mid + 1;
                ans = mid;
            } else {
                high = mid - 1;
            }
        }

        return ans;
        // int ans = 0, lo = 0, hi = 1e8;
        
        // while(lo <= hi) {
        //     int mid = lo + (hi-lo)/2;
            
        //     bool flag = false;
        //     for(auto comp : composition) {
        //         int temp = mid, target = budget, mn = 0;
        //         vector<pair<int, int>> v;
                
        //         for(int i=0;i<comp.size();i++)
        //             v.push_back({stock[i]/comp[i], stock[i]%comp[i]});
                
        //         for(int i=0;i<v.size();i++) {
        //             int t = temp - (v[i].first >= temp ? temp : v[i].first);
        //             if(t > 0 and v[i].second > 0 and comp[i] > v[i].second) {
        //                 t -= 1;
        //                 target -= ((comp[i]+0LL)-v[i].second)*cost[i];
        //             }
        //             target -= long(t*(comp[i]+0LL)*cost[i]);
        //         }
        //         if(target >= 0) flag = true;
        //     }
        //     if(flag) {
        //         ans = mid;
        //         lo = mid+1;
        //     } else hi = mid-1;
        // }
        // return ans;
    }
};