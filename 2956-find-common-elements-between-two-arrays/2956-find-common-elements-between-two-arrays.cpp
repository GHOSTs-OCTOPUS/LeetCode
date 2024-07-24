class Solution {
public:
    vector<int> findIntersectionValues(vector<int>& nums1, vector<int>& nums2) {
        int count1 = 0;
        int count2 = 0;
        vector<int> ans;

        int n1 = nums1.size();
        int n2 = nums2.size();

        for(int i=0;i<n1;i++)
        {
            for(int j=0;j<n2;j++)
            {
                if(nums1[i] == nums2[j])
                {
                    count1++;
                    break;
                }
            }
        }
        for(int i=0;i<n2;i++)
        {
            for(int j=0;j<n1;j++)
            {
                if(nums2[i] == nums1[j])
                {
                    count2++;
                    break;
                }
            }
        }
        ans.push_back(count1);
        ans.push_back(count2);

        return ans;
    }
};