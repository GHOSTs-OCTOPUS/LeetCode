class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        unordered_set<int> st1;
        unordered_set<int> st2;
        int mn=0,count=0;
        if(trust.size()<n-1)
        {
            return -1;
        }
        if(trust.size()==0)
        {
            return 1;
        }
        
        for(int i=0;i<trust.size();i++)
        {
            st2.insert(trust[i][0]);
            for(int j=0;j<2;j++)
            {
                st1.insert(trust[i][j]);
            }
        }
            //Finding missing number in from both sets
            for (int x:st1)
            {
                mn+=x;
            }
            for (auto y:st2)
            {
                mn-=y;
            }
            cout<<mn;

// Counting freq of missing number on the right element of the vector pair
        for(int i=0;i<trust.size();i++)
        {
            if(trust[i][1]==mn)
            {
                count++;
            }
        }

        //Checking if freq of missing number and n-1 is equal to get the judge
        if(count==(n-1))
        {
            return mn;
        }
        else
        {
            return -1;
        }
    }
};