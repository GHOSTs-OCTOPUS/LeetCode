class Solution {
public:
    int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {
        vector<int>v1, v2;
        int sum1=0, sum2=0;
        for(int i=0; i<nums1.size(); i++){
            sum1+=nums1[i];
            sum2+=nums2[i];
            v1.push_back(nums1[i]-nums2[i]);
            v2.push_back(nums2[i]-nums1[i]);
        }
        int s1=0, s2=0, c1=INT_MIN, c2=INT_MIN;
        for(int i=0; i<nums1.size(); i++){
            s1+=v1[i];
            c1=max(c1, s1);
            if(s1<0){
                s1=0;
            }
        }
        for(int i=0; i<nums1.size(); i++){
            s2+=v2[i];
            c2=max(c2, s2);
            if(s2<0){
                s2=0;
            }
        }
        return max(sum1+c2, sum2+c1);
    }
};