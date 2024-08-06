class Solution {
    void helper(vector<int>&v1)
    {
        for(int i=0; i<v1.size(); i++)
        {
            v1[i]=~v1[i]+2;
        }
    }
    // bool check(vector<int>&v1)
    // {
    //     int a=v1[0];
    //     int count0=0;
    //     int count1=0;
    //     for(int i=1; i<v1.size(); i++)
    //     {
    //         if(v1[i]!=a)
    //         {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // bool check(vector<int>&v1)
    // {
    //     int a=v1[0];
    //     int count0=0;
    //     int count1=0;
    //     for(int i=1; i<v1.size(); i++)
    //     {
    //         if(v1[i]==0)
    //         {
    //             count0++;
    //         }
    //         else{
    //             count1++;
    //         }
    //     }
    //     if(count1==1 || count0==1)
    //     {
    //         return 1;
    //     }
    //     return false;
    // }
public:
    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {
        map<vector<int>, int>mymap;
        int m=matrix.size();
        int n=matrix[0].size();
        for(int i=0; i<m; i++)
        {
            vector<int>v1=matrix[i];
            // if(check(v1)==true)
            // {
            //     mymap[v1]++;
            //     helper(v1);
            //     mymap[v1]++;
            // }
            // if(check(v1)==true)
            // {
            mymap[v1]++;
            helper(v1);
            mymap[v1]++;
            // }
        }
        int ans=0;
        for(auto i=mymap.begin(); i!=mymap.end(); i++)
        {
            ans=max(ans, i->second);
        }
        return ans;
    }
};