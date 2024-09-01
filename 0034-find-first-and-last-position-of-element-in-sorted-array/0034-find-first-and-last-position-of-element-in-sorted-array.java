class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] temp={-1,-1};
        int low=0;
        int high=nums.length-1;
        int left_found=0;
        int right_found=0;
        while(low<=high){
            if(left_found==0){
                if(target==nums[low]){
                   temp[0]=low;
                   left_found++;
                   continue;
                }
            low++;
            }
            if(right_found==0){
                if(target==nums[high]){
                    temp[1]=high;
                    right_found++;
                    continue;
                }
            high--;
            }
            if(left_found!=0 && right_found!=0)return temp;
        }
        return temp;
    }
}